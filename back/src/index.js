import "dotenv/config";
import express from "express";
import cors from "cors";
import { sendEmail } from "./mailer.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["POST", "GET"],
  })
);
app.use(express.json({ limit: "10kb" }));

// Rate limiting simple (en memoria)
const rateLimitMap = new Map();
function rateLimit(req, res, next) {
  const ip = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minuto
  const maxRequests = 3;

  const requests = rateLimitMap.get(ip) || [];
  const recentRequests = requests.filter((t) => now - t < windowMs);

  if (recentRequests.length >= maxRequests) {
    return res.status(429).json({ error: "Demasiadas solicitudes. Intenta en un minuto." });
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  next();
}

// Ruta de salud
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "API del portafolio funcionando" });
});

// Ruta para enviar correo de contacto
app.post("/api/contact", rateLimit, async (req, res) => {
  const { name, email, message } = req.body;

  // Validaciones
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  if (name.length > 100 || email.length > 100 || message.length > 1000) {
    return res.status(400).json({ error: "Los campos exceden el límite permitido" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Email inválido" });
  }

  try {
    await sendEmail({ name, email, message });
    res.json({ success: true, message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar correo:", error.message);
    res.status(500).json({ error: "Error al enviar el correo" });
  }
});

app.listen(PORT, () => {
  console.log(`✓ Servidor corriendo en http://localhost:${PORT}`);
});
