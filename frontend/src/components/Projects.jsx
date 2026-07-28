import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

const projects = [
  {
    title: "Cootranar - Plataforma de Tiquetes",
    description:
      "Plataforma de transporte terrestre con compra de tiquetes online, gestión de encomiendas y facturación electrónica. Sistema completo con autenticación y panel administrativo.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    github: null,
    demo: "https://plataformae-comert.vercel.app",
    status: "85%",
    gradient: "from-blue to-cyan",
  },
  {
    title: "Nariño Web - Turismo",
    description:
      "Portal turístico de la región de Nariño que muestra destinos, rutas, cultura y gastronomía local. Diseño atractivo pensado para promover el turismo regional.",
    technologies: ["Angular", "TypeScript", "CSS"],
    github: "https://github.com/cdlandazuri222/Nari-o-Wed.git",
    demo: "https://nari-o-wed.vercel.app",
    status: "15%",
    gradient: "from-purple to-blue",
  },
  {
    title: "Sistema de Reservas - Peluquería",
    description:
      "App web para agendar citas en peluquería con calendario interactivo, disponibilidad en tiempo real y confirmación automática. Incluye panel de administración para el negocio.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MySQL"],
    github: "https://github.com/cdlandazuri222",
    demo: "https://peluqueria-opal.vercel.app",
    status: "65%",
    gradient: "from-cyan to-purple",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-16 md:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Proyectos
          </h2>
          <p className="text-gray-500 text-sm">
            Lo que he construido hasta ahora
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="card-glow group relative rounded-2xl bg-dark-card border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-300"
            >
              {/* Top gradient bar */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${project.gradient}`}
              />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/5 flex items-center justify-center">
                    <FiFolder className="w-5 h-5 text-blue" />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.status && (
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-blue/10 text-blue-light border border-blue/20 font-medium">
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress bar */}
                {project.status && (
                  <div className="mb-4">
                    <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${project.gradient}`}
                        style={{ width: project.status }}
                      />
                    </div>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-light transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-gray-400 border border-white/5 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-5 pt-4 border-t border-white/5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors duration-200"
                      aria-label={`Ver código de ${project.title} en GitHub`}
                    >
                      <FiGithub className="w-4 h-4" />
                      Código
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-gray-500 hover:text-cyan transition-colors duration-200"
                      aria-label={`Ver demo de ${project.title}`}
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Ver demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
