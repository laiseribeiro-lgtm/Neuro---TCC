import { Router } from "express";
import { supabase } from "../server";

const router = Router();

// LOGIN
router.post("/", async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({
        erro: "E-mail e senha são obrigatórios.",
      });
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: senha,
    });

    if (error) {
      return res.status(401).json({
        erro: "E-mail ou senha incorretos.",
      });
    }

    return res.status(200).json({
      mensagem: "Login realizado com sucesso!",
      usuario: data.user,
      sessao: data.session,
    });
  } catch (error) {
    console.error("Erro no login:", error);

    return res.status(500).json({
      erro: "Erro interno do servidor.",
    });
  }
});

// LOGOUT
router.post("/logout", async (req, res) => {
  try {
    const autorizacao = req.headers.authorization;

    if (!autorizacao || !autorizacao.startsWith("Bearer ")) {
      return res.status(401).json({
        erro: "Autenticação necessária.",
      });
    }

    const token = autorizacao.split(" ")[1];

    // Verifica se o token ainda é válido
    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data.user) {
      return res.status(401).json({
        erro: "Sessão inválida ou expirada.",
      });
    }

    return res.status(200).json({
      mensagem: "Sessão encerrada com sucesso!",
    });
  } catch (error) {
    console.error("Erro no logout:", error);

    return res.status(500).json({
      erro: "Erro interno ao encerrar a sessão.",
    });
  }
});

export default router;