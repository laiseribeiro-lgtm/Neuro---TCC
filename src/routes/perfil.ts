import { Router } from "express";
import { supabase } from "../server";
import { autenticar } from "../middleware/autenticar";
import { createClient } from "@supabase/supabase-js";

const router = Router();

router.get("/", autenticar, async (req, res) => {
  try {
    const authUserId = res.locals.authUserId;

    const { data: usuario, error } = await supabase
      .from("usuarios")
      .select(
        "id_usuario, nome, nome_usuario, email, telefone, data_nascimento, foto_perfil, status, data_cadastro"
      )
      .eq("auth_user_id", authUserId)
      .single();

    if (error || !usuario) {
      console.error("Erro ao buscar perfil:", error);

      return res.status(404).json({
        erro: "Perfil não encontrado.",
      });
    }

    return res.status(200).json({
      mensagem: "Perfil carregado com sucesso!",
      usuario,
    });
  } catch (error) {
    console.error("Erro no perfil:", error);

    return res.status(500).json({
      erro: "Erro interno do servidor.",
    });
  }
});


router.patch("/", autenticar, async (req, res) => {
  try {
    const authUserId = res.locals.authUserId;
    const { nome, nome_usuario, telefone, data_nascimento } = req.body;

    const atualizacoes: {
      nome?: string;
      nome_usuario?: string | null;
      telefone?: string | null;
      data_nascimento?: string | null;
    } = {};

    if (typeof nome === "string") {
      if (!nome.trim()) {
        return res.status(400).json({ erro: "O nome não pode ficar vazio." });
      }
      atualizacoes.nome = nome.trim();
    }

    if (typeof nome_usuario === "string") {
      atualizacoes.nome_usuario = nome_usuario.trim() || null;
    }

    if (typeof telefone === "string") {
      atualizacoes.telefone = telefone.trim() || null;
    }

    if (typeof data_nascimento === "string") {
      atualizacoes.data_nascimento = data_nascimento || null;
    }

    if (Object.keys(atualizacoes).length === 0) {
      return res.status(400).json({ erro: "Nenhum dado para atualizar." });
    }

    const { data, error } = await supabase
      .from("usuarios")
      .update(atualizacoes)
      .eq("auth_user_id", authUserId)
      .select(
        "id_usuario, nome, nome_usuario, email, telefone, data_nascimento, foto_perfil, status, data_cadastro"
      )
      .single();

    if (error || !data) {
      console.error("Erro ao atualizar perfil:", error);
      return res.status(400).json({
        erro: "Não foi possível atualizar os dados da conta.",
      });
    }

    return res.status(200).json({
      mensagem: "Dados atualizados com sucesso!",
      usuario: data,
    });
  } catch (error) {
    console.error("Erro ao atualizar perfil:", error);
    return res.status(500).json({ erro: "Erro interno do servidor." });
  }
});


router.patch("/email", autenticar, async (req, res) => {
  try {
    const { email } = req.body;
    const autorizacao = req.headers.authorization;
    const novoEmail = typeof email === "string" ? email.trim().toLowerCase() : "";

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!novoEmail || !formatoEmail.test(novoEmail)) {
      return res.status(400).json({
        erro: "Informe um endereço de e-mail válido.",
      });
    }

    if (!autorizacao || !autorizacao.startsWith("Bearer ")) {
      return res.status(401).json({
        erro: "Autenticação necessária.",
      });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({
        erro: "Configuração do servidor incompleta.",
      });
    }

    const resposta = await fetch(
      `${supabaseUrl.replace(/\/$/, "")}/auth/v1/user`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: autorizacao,
        },
        body: JSON.stringify({ email: novoEmail }),
      }
    );

    const resultado = await resposta.json();

    if (!resposta.ok) {
      console.error("Erro na alteração de e-mail:", resultado);

      return res.status(resposta.status).json({
        erro:
          resultado.message ||
          resultado.msg ||
          "Não foi possível solicitar a alteração do e-mail.",
      });
    }

    return res.status(200).json({
      mensagem:
        "Solicitação enviada. Verifique seu e-mail para concluir a alteração.",
    });
  } catch (error) {
    console.error("Erro ao solicitar alteração de e-mail:", error);

    return res.status(500).json({
      erro: "Erro interno ao solicitar a alteração do e-mail.",
    });
  }
});


router.patch("/senha", autenticar, async (req, res) => {
  try {
    const authUserId = res.locals.authUserId;
    const autorizacao = req.headers.authorization;
    const { senhaAtual, novaSenha } = req.body;

    if (
      typeof senhaAtual !== "string" ||
      typeof novaSenha !== "string" ||
      !senhaAtual ||
      !novaSenha
    ) {
      return res.status(400).json({
        erro: "Preencha a senha atual e a nova senha.",
      });
    }

    if (novaSenha.length < 8) {
      return res.status(400).json({
        erro: "A nova senha deve ter pelo menos 8 caracteres.",
      });
    }

    if (senhaAtual === novaSenha) {
      return res.status(400).json({
        erro: "A nova senha deve ser diferente da atual.",
      });
    }

    if (!autorizacao?.startsWith("Bearer ")) {
      return res.status(401).json({
        erro: "Autenticação necessária.",
      });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const anonKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !anonKey) {
      return res.status(500).json({
        erro: "Configuração de autenticação incompleta no servidor.",
      });
    }

    // Busca o e-mail da conta autenticada.
    const { data: usuario, error: erroUsuario } = await supabase
      .from("usuarios")
      .select("email")
      .eq("auth_user_id", authUserId)
      .single();

    if (erroUsuario || !usuario?.email) {
      return res.status(404).json({
        erro: "Não foi possível localizar a conta.",
      });
    }

    // Cliente isolado para conferir a senha atual, sem alterar
    // a sessão global utilizada pelas outras rotas.
    const clienteVerificacao = createClient(supabaseUrl, anonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    });

    const { data: verificacao, error: erroVerificacao } =
      await clienteVerificacao.auth.signInWithPassword({
        email: usuario.email,
        password: senhaAtual,
      });

    if (
      erroVerificacao ||
      !verificacao.user ||
      verificacao.user.id !== authUserId
    ) {
      return res.status(401).json({
        erro: "A senha atual está incorreta.",
      });
    }

    // Atualiza a senha da conta autenticada.
    const { error: erroAtualizacao } =
      await supabase.auth.admin.updateUserById(authUserId, {
        password: novaSenha,
      });

    if (erroAtualizacao) {
      console.error("Erro ao atualizar senha:", erroAtualizacao);

      return res.status(400).json({
        erro: "Não foi possível atualizar a senha.",
      });
    }

    return res.status(200).json({
      mensagem: "Senha alterada com sucesso!",
    });
  } catch (error) {
    console.error("Erro na alteração de senha:", error);

    return res.status(500).json({
      erro: "Erro interno ao alterar a senha.",
    });
  }
});

export default router;