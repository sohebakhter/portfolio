import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "tech-stack",
        "experience",
        "projects",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Close mobile menu when clicking
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
      className={`sticky top-0 z-50 py-4 px-6 sm:px-8 lg:px-12 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-gray-200 dark:border-slate-700"
          : "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-gray-100 dark:border-slate-800"
      }`}
    >
      <div className=" max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl sm:text-3xl font-bold font-['Playfair_Display'] text-[#0D9488] tracking-wide cursor-pointer"
          onClick={(e) => scrollToSection(e, "home")}
        >
          SOHEB
        </motion.div>
        <div className="hidden lg:flex items-center space-x-8">
          {[
            "Home",
            "About",
            "Tech Stack",
            "Experience",
            "Projects",
            "Contact",
          ].map((item, index) => {
            const sectionMap = {
              Home: "home",
              About: "about",
              "Tech Stack": "tech-stack",
              Experience: "experience",
              Projects: "projects",
              Contact: "contact",
            };

            const isActive = activeSection === sectionMap[item];

            return (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`relative font-['Playfair_Display'] text-sm font-medium cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "text-[#0D9488] font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#0D9488]"
                }`}
                onClick={(e) => scrollToSection(e, sectionMap[item])}
              >
                {item}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0D9488] rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block bg-[#0D9488] text-white text-sm font-semibold py-2 px-6 rounded-lg hover:bg-[#0A8F7A] transition-colors font-['Playfair_Display']"
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Hire Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden text-gray-700 dark:text-gray-300 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 shadow-lg lg:hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {[
                "Home",
                "About",
                "Tech Stack",
                "Experience",
                "Projects",
                "Contact",
              ].map((item, index) => {
                const sectionMap = {
                  Home: "home",
                  About: "about",
                  "Tech Stack": "tech-stack",
                  Experience: "experience",
                  Projects: "projects",
                  Contact: "contact",
                };

                const isActive = activeSection === sectionMap[item];

                return (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`block font-['Playfair_Display'] text-base font-medium py-2 transition-colors ${
                      isActive
                        ? "text-[#0D9488] font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:text-[#0D9488]"
                    }`}
                    onClick={(e) => scrollToSection(e, sectionMap[item])}
                  >
                    {item}
                  </motion.a>
                );
              })}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#0D9488] text-white text-sm font-semibold py-3 px-6 rounded-lg hover:bg-[#0A8F7A] transition-colors font-['Playfair_Display'] mt-4"
                onClick={(e) => scrollToSection(e, "contact")}
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
