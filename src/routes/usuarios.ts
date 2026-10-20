import { Router } from "express";
import { supabase } from "../server";

const router = Router();

router.post("/cadastro", async (req, res) => {
  try {
    const {
      nome,
      nascimento,
      email,
      senha,
    } = req.body;

    if (!nome || !nascimento || !email || !senha) {
      return res.status(400).json({
        erro: "Preencha todos os campos.",
      });
    }

    // Cria o usuário no Supabase Auth.
    // O trigger do banco criará automaticamente
    // o registro em public.usuarios e public.configuracoes_usuario.
    const { data, error } =
      await supabase.auth.admin.createUser({
        email: email.trim(),
        password: senha,
        email_confirm: true,

        user_metadata: {
          nome: nome.trim(),
          data_nascimento: nascimento,
        },
      });

    if (error) {
      console.error("Erro ao criar usuário:", error);

      return res.status(400).json({
        erro: error.message,
      });
    }

    if (!data.user) {
      return res.status(400).json({
        erro: "Não foi possível criar o usuário.",
      });
    }

    return res.status(201).json({
      mensagem: "Usuário cadastrado com sucesso!",
      usuario: data.user,
    });

  } catch (error) {
    console.error("Erro no cadastro:", error);

    return res.status(500).json({
      erro: "Erro interno do servidor.",
    });
  }
});

export default router;