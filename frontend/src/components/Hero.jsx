import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiGithub } from "react-icons/fi";
import profileImg from "../assets/profile.jpg";

const ParticleField = lazy(() => import("./ParticleField"));

function ParticlesWrapper() {
  return (
    <Suspense fallback={null}>
      <ParticleField />
    </Suspense>
  );
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Partículas 3D de fondo */}
      <ParticlesWrapper />

      {/* Degradados de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-blue/6 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple/4 rounded-full blur-[100px]" />
      </div>

      {/* Grid sutil */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <div>
          <motion.div
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue/10 border border-blue/20 mb-6"
          >
            <span className="text-xs">💻</span>
            <span className="text-xs text-blue-light font-medium">
              Desarrollador Frontend
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-5 tracking-tight"
          >
            Cristian David{" "}
            <span className="bg-gradient-to-r from-blue via-cyan to-blue-light bg-clip-text text-transparent">
              Landazuri
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg"
          >
            Desarrollador Web Junior y estudiante de Ingeniería de Sistemas.
            Construyo desde interfaces modernas hasta bases de datos, creando
            soluciones completas con atención al detalle.
          </motion.p>

          <motion.div
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3"
          >
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue to-cyan text-white text-sm font-medium shadow-xl shadow-blue/25 hover:shadow-blue/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              <FiArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Ver proyectos
            </a>
            <a
              href={import.meta.env.VITE_GITHUB || "https://github.com/cdlandazuri222"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/5 hover:border-white/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              <FiGithub className="w-4 h-4" />
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Foto de perfil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Anillos animados */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-dashed border-blue/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-full border border-dashed border-cyan/10"
            />

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue/40 to-cyan/40 blur-3xl scale-110" />

            {/* Foto */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-blue via-cyan to-purple p-[3px] shadow-2xl shadow-blue/20">
              <img
                src={profileImg}
                alt="Cristian David Landazuri Mambuscay"
                className="w-full h-full rounded-full object-cover object-top bg-dark"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-blue/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
