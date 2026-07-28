import nodemailer from "nodemailer";

const EMAIL_USER = process.env.EMAIL_USER || "crisindavid575@gmail.com";
const EMAIL_PASS = process.env.EMAIL_PASS || "";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export async function sendEmail({ name, email, message }) {
  // Sanitizar inputs
  const safeName = name.replace(/[<>]/g, "");
  const safeMessage = message.replace(/[<>]/g, "");

  const mailOptions = {
    from: `"Portafolio - Contacto" <${EMAIL_USER}>`,
    to: EMAIL_USER,
    replyTo: email,
    subject: `💼 Nuevo mensaje de ${safeName} — Portafolio`,
    html: `
      <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #3b82f6, #06b6d4); padding: 20px; border-radius: 12px 12px 0 0;">
          <h2 style="color: white; margin: 0; font-size: 18px;">Nuevo mensaje desde tu portafolio</h2>
        </div>
        <div style="background: #1e293b; padding: 24px; border-radius: 0 0 12px 12px; color: #e2e8f0;">
          <p style="margin: 0 0 12px;"><strong style="color: #94a3b8;">Nombre:</strong> ${safeName}</p>
          <p style="margin: 0 0 12px;"><strong style="color: #94a3b8;">Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
          <p style="margin: 0 0 8px;"><strong style="color: #94a3b8;">Mensaje:</strong></p>
          <p style="margin: 0; padding: 12px; background: #0f172a; border-radius: 8px; line-height: 1.6;">${safeMessage}</p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}
