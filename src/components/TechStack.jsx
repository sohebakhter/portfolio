import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaFigma,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiVercel } from "react-icons/si";
import { FiServer } from "react-icons/fi";
import { VscCode } from "react-icons/vsc";

export default function TechStack() {
  const frontend = [
    { name: "HTML5", Icon: FaHtml5 },
    { name: "CSS3", Icon: FaCss3 },
    { name: "JavaScript", Icon: FaJs },
    { name: "React", Icon: FaReact },
  ];

  const backend = [
    { name: "Node.js", Icon: FaNodeJs },
    { name: "Express", Icon: SiExpress },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "REST APIs", Icon: FiServer },
  ];

  const tools = [
    { name: "Git", Icon: FaGit },
    { name: "VS Code", Icon: VscCode },
    { name: "Figma", Icon: FaFigma },
    { name: "Vercel", Icon: SiVercel },
  ];

  const TechCard = ({ name, Icon, index }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-4 sm:p-6 bg-white dark:bg-slate-900/70 rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="bg-[#0D9488] text-white p-3 sm:p-4 rounded-lg"
      >
        <Icon className="text-3xl sm:!text-4xl" />
      </motion.div>
      <p className="mt-3 sm:mt-4 font-semibold text-sm sm:text-base text-[#0D9488] text-center">
        {name}
      </p>
    </motion.div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div id="tech-stack" className="bg-[#F0F9FF] dark:bg-[#0C1421] py-20">
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D9488]"
            >
              My Tech Stack
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4"
            >
              A collection of technologies I use to build robust and beautiful
              web applications.
            </motion.p>
          </motion.div>
          <div className="space-y-12 sm:space-y-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 text-center sm:text-left"
              >
                Frontend
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {frontend.map((tech, index) => (
                  <TechCard key={tech.name} {...tech} index={index} />
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 text-center sm:text-left"
              >
                Backend
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {backend.map((tech, index) => (
                  <TechCard key={tech.name} {...tech} index={index} />
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 text-center sm:text-left"
              >
                Tools & Platforms
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {tools.map((tech, index) => (
                  <TechCard key={tech.name} {...tech} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
