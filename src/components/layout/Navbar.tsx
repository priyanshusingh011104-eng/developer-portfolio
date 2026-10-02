"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
} from "framer-motion";

import {
  Menu,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionElements = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(
        (
          section
        ): section is HTMLElement =>
          section !== null
      );

    if (sectionElements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleEntries.length > 0) {
          setActiveSection(
            visibleEntries[0].target.id
          );
        }
      },
      {
        rootMargin:
          "-35% 0px -50% 0px",
        threshold: [
          0,
          0.1,
          0.25,
          0.5,
          0.75,
        ],
      }
    );

    sectionElements.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* PROGRESS BAR */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="fixed left-0 top-0 z-[100] h-[2px] w-full origin-left bg-gradient-to-r from-violet-500 via-fuchsia-400 to-blue-400"
      />

      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="fixed left-0 top-0 z-50 w-full"
      >
        <div className="container-custom pt-3 sm:pt-4 md:pt-5">
          <nav
            className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5 md:px-7 ${
              scrolled
                ? "border-white/[0.08] bg-black/70 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
                : "border-white/[0.06] bg-white/[0.025] backdrop-blur-xl"
            }`}
          >
            {/* LOGO */}
            <a
              href="#home"
              className="text-lg font-semibold tracking-[-0.04em] text-white"
            >
              PS
              <span className="text-violet-400">
                .
              </span>
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden items-center gap-6 xl:flex">
              {navLinks.map((link) => {
                const isActive =
                  activeSection === link.id;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`group relative text-sm transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    {link.name}

                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-dot"
                        className="absolute -bottom-3 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.9)]"
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden xl:block">
              <a
                href="#contact"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-violet-200"
              >
                Let&apos;s Talk
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              onClick={() =>
                setIsOpen((previous) => !previous)
              }
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white xl:hidden"
            >
              {isOpen ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>
          </nav>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -12,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -12,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.22,
                }}
                className="mt-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-black/90 p-4 shadow-2xl backdrop-blur-2xl xl:hidden"
              >
                <div className="flex flex-col">
                  {navLinks.map((link) => {
                    const isActive =
                      activeSection === link.id;

                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() =>
                          setIsOpen(false)
                        }
                        className="flex items-center justify-between border-b border-white/[0.05] px-2 py-4 last:border-none"
                      >
                        <span
                          className={`text-sm ${
                            isActive
                              ? "text-white"
                              : "text-zinc-500"
                          }`}
                        >
                          {link.name}
                        </span>

                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]" />
                        )}
                      </a>
                    );
                  })}

                  <a
                    href="#contact"
                    onClick={() =>
                      setIsOpen(false)
                    }
                    className="mt-4 rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-black"
                  >
                    Let&apos;s Talk
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}