import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`max-w-7xl mx-auto rounded-full sticky top-0 z-50 py-5 px-6 sm:px-10 lg:px-12 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-gray-200 dark:border-slate-700"
          : "bg-white dark:bg-slate-900 border-gray-100 dark:border-slate-800 shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black font-['Playfair_Display'] text-[#0D9488] tracking-wider cursor-pointer"
        >
          SOHEB
        </motion.div>
        <div className="hidden lg:flex items-center space-x-8">
          {[
            "Home",
            "About Us",
            "Services",
            "Experience",
            "Skill",
            "Projects",
          ].map((item, index) => {
            const sectionMap = {
              Home: "home",
              "About Us": "about",
              Services: "tech-stack",
              Experience: "about",
              Skill: "tech-stack",
              Projects: "projects",
            };
            return (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: "#0D9488" }}
                className={`text-sm font-medium cursor-pointer transition-colors ${
                  index === 0
                    ? "text-slate-800 dark:text-slate-200"
                    : "text-slate-500 dark:text-slate-400"
                } hover:text-[#0D9488]`}
                onClick={(e) => scrollToSection(e, sectionMap[item])}
              >
                {item}
              </motion.a>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block bg-[#0D9488] text-white text-sm font-semibold py-2 px-5 rounded-md hover:bg-teal-700 transition-colors"
            onClick={(e) => scrollToSection(e, "contact")}
          >
            HIRE ME
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-slate-800 dark:text-slate-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 6h16M4 12h16m-7 6h7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
