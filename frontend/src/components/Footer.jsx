import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

const EMAIL = import.meta.env.VITE_EMAIL || "crisindavid575@gmail.com";
const GITHUB = import.meta.env.VITE_GITHUB || "https://github.com/cdlandazuri222";
const LINKEDIN = import.meta.env.VITE_LINKEDIN || "https://linkedin.com/in/tu-usuario";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-500 flex items-center gap-1">
          © {year} Cristian David Landazuri · Hecho con
          <FiHeart className="w-3 h-3 text-red-400" />
          y React
        </p>

        <div className="flex items-center gap-5">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 hover:text-white hover:scale-110 transition-all duration-200"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-white hover:scale-110 transition-all duration-200"
          >
            <FiLinkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="text-gray-600 hover:text-white hover:scale-110 transition-all duration-200"
          >
            <FiMail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
