import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiVite,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    gradient: "from-blue/10 to-cyan/10",
    borderColor: "border-blue/10",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    gradient: "from-purple/10 to-blue/10",
    borderColor: "border-purple/10",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
    ],
  },
  {
    title: "Bases de Datos",
    gradient: "from-cyan/10 to-blue/10",
    borderColor: "border-cyan/10",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    title: "Herramientas",
    gradient: "from-blue/10 to-purple/10",
    borderColor: "border-blue/10",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="tecnologias" className="py-16 md:py-28 px-4 sm:px-6 relative">
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-light/50 to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Tecnologías
          </h2>
          <p className="text-gray-500 text-sm">
            Herramientas que uso para construir proyectos web
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`card-glow rounded-2xl bg-dark-card border border-white/5 p-6 hover:border-white/10 transition-all duration-300`}
            >
              {/* Header con gradiente */}
              <div
                className={`inline-flex px-3 py-1 rounded-lg bg-gradient-to-r ${category.gradient} border ${category.borderColor} mb-5`}
              >
                <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3.5">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/10 transition-all duration-200">
                      <skill.icon
                        className="w-4 h-4 transition-transform duration-200 group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
