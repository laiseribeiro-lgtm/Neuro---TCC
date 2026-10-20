import { Request, Response, NextFunction } from "express";
import { supabase } from "../server";

export async function autenticar(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const autorizacao = req.headers.authorization;

    if (!autorizacao || !autorizacao.startsWith("Bearer ")) {
      return res.status(401).json({
        erro: "Autenticação necessária.",
      });
    }

    const token = autorizacao.split(" ")[1];

    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data.user) {
      return res.status(401).json({
        erro: "Sessão inválida ou expirada.",
      });
    }

    res.locals.authUserId = data.user.id;

    next();
  } catch (error) {
    console.error("Erro na autenticação:", error);

    return res.status(500).json({
      erro: "Erro interno ao verificar autenticação.",
    });
  }
}