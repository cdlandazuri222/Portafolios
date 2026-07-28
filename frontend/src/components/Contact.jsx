import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

const EMAIL = import.meta.env.VITE_EMAIL || "crisindavid575@gmail.com";
const GITHUB = import.meta.env.VITE_GITHUB || "https://github.com/cdlandazuri222";
const LINKEDIN = import.meta.env.VITE_LINKEDIN || "https://linkedin.com/in/tu-usuario";

const contacts = [
  { icon: FiMail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: FiGithub, label: "GitHub", value: "cdlandazuri222", href: GITHUB },
  { icon: FiLinkedin, label: "LinkedIn", value: "Conectemos", href: LINKEDIN },
  { icon: FiMapPin, label: "Ubicación", value: "Colombia", href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Contacto de ${form.name} - Portafolio`);
    const body = encodeURIComponent(
      `Hola Cristian,\n\nMi nombre es ${form.name}.\n\n${form.message}\n\nMi correo: ${form.email}`
    );

    window.open(`https://mail.google.com/mail/?view=cm&to=${EMAIL}&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <section id="contacto" className="py-16 md:py-28 px-4 sm:px-6 relative">
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-light/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Contacto
          </h2>
          <p className="text-gray-500 text-sm">
            ¿Tienes un proyecto o una oportunidad? Me encantaría escucharte.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-3"
          >
            {contacts.map((item) => {
              const content = (
                <div className="flex items-center gap-4 p-4 rounded-xl bg-dark-card border border-white/5 hover:border-blue/20 hover:bg-dark-hover transition-all duration-200">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue/10 to-cyan/10 border border-blue/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">
                      {item.label}
                    </p>
                    <p className="text-sm text-gray-300">{item.value}</p>
                  </div>
                </div>
              );

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {content}
                  </a>
                );
              }
              return <div key={item.label}>{content}</div>;
            })}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className="w-full px-4 py-3.5 rounded-xl bg-dark-card border border-white/5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue/30 focus:ring-1 focus:ring-blue/20 transition-all duration-200"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
                className="w-full px-4 py-3.5 rounded-xl bg-dark-card border border-white/5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue/30 focus:ring-1 focus:ring-blue/20 transition-all duration-200"
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Cuéntame sobre tu proyecto o propuesta..."
              className="w-full px-4 py-3.5 rounded-xl bg-dark-card border border-white/5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue/30 focus:ring-1 focus:ring-blue/20 transition-all duration-200 resize-none"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue to-cyan text-white text-sm font-medium shadow-xl shadow-blue/20 hover:shadow-blue/35 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer"
            >
              <FiSend className="w-4 h-4" />
              Enviar mensaje
            </button>

            <p className="text-[11px] text-gray-600 text-center">
              Se abrirá Gmail con el mensaje listo para enviar a {EMAIL}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
