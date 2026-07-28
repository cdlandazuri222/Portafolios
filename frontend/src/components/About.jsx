import { motion } from "framer-motion";
import { FiCode, FiTarget, FiDatabase, FiUsers } from "react-icons/fi";

const highlights = [
  {
    icon: FiCode,
    title: "Frontend Developer",
    text: "Especializado en React y el ecosistema JavaScript moderno.",
  },
  {
    icon: FiDatabase,
    title: "Bases de Datos",
    text: "Me apasiona el diseño y gestión de bases de datos relacionales.",
  },
  {
    icon: FiUsers,
    title: "Scrum & Organización",
    text: "Me gusta trabajar con metodologías ágiles y equipos organizados.",
  },
  {
    icon: FiTarget,
    title: "Orientado a resultados",
    text: "Busco crear productos web funcionales y bien estructurados.",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-16 md:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Sobre mí
          </h2>
          <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
            Soy estudiante de último semestre de Ingeniería de Sistemas con
            enfoque en desarrollo web y bases de datos. Me apasiona construir
            interfaces modernas y diseñar estructuras de datos eficientes.
            Disfruto trabajar con metodologías ágiles como Scrum porque valoro
            la organización y el trabajo en equipo. Mi objetivo es integrarme a
            un equipo donde pueda crecer profesionalmente y aportar soluciones
            reales.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="card-glow group text-center p-6 rounded-2xl bg-dark-card border border-white/5 hover:border-blue/20 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue/10 to-cyan/10 border border-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-5 h-5 text-blue" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
