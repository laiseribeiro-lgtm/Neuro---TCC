import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import usuariosRoutes from "./routes/usuarios";
import loginRoutes from "./routes/login";
import perfilRoutes from "./routes/perfil";

dotenv.config();

const app = express();
app.use("/usuarios", usuariosRoutes);
app.use("/perfil", perfilRoutes);
app.use("/login", loginRoutes);

app.use(cors());
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Variáveis do Supabase não configuradas.");
}

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

app.use("/usuarios", usuariosRoutes);

app.get("/", (req, res) => {
  res.json({
    mensagem: "Backend conectado ao Supabase!"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});