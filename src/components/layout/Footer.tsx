import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="container-custom">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Priyanshu Singh
            </p>

            <p className="mt-1 text-xs text-zinc-700">
              Software Engineer • Backend Developer • Full-Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/priyanshu210620"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-600 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/priyanshu-singh-1b58a1384/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-600 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="mailto:priyanshusingh011104@gmail.com"
              aria-label="Email"
              className="text-zinc-600 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}