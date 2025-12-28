import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      type: "work",
      title: "Web Developer",
      company: "Own Freelance",
      period: "2023 - Present",
      description:
        "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      icon: FaBriefcase,
    },
    {
      id: 2,
      type: "work",
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2023 - 2024",
      description:
        "Built responsive user interfaces and implemented modern web technologies. Worked closely with designers to create pixel-perfect implementations.",
      technologies: ["HTML", "CSS", "JavaScript", "Vue.js"],
      icon: FaBriefcase,
    },
    {
      id: 3,
      type: "education",
      title: "Complete Web Developent",
      company: "Programming Hero",
      period: "2022 - 2023",
      description:
        "Graduated with honors, focusing on software engineering and web development. Completed capstone project on full-stack web applications.",
      technologies: ["Data Structures", "Algorithms", "Database Systems"],
      icon: FaGraduationCap,
    },
    {
      id: 4,
      type: "achievement",
      title: "Full Stack Certification",
      company: "Online Learning Platform",
      period: "2023",
      description:
        "Completed comprehensive full-stack development certification covering modern web technologies and best practices.",
      technologies: ["MERN Stack", "REST APIs", "Git"],
      icon: FaAward,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "work":
        return "bg-blue-500";
      case "education":
        return "bg-green-500";
      case "achievement":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div id="experience" className="bg-[#F0F9FF] dark:bg-[#0C1421]">
      <div className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
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
              className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D9488] mb-4"
            >
              My Experience
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              A journey through my professional growth, education, and key
              achievements in the world of web development.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 bg-[#0D9488]/20 dark:bg-[#0D9488]/40 h-full rounded-full"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className={`relative flex items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col md:items-start`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-[#0D9488] rounded-full border-4 border-white dark:border-slate-900 z-10"></div>

                    {/* Content */}
                    <div
                      className={`ml-20 md:ml-0 md:w-5/12 ${
                        isEven ? "md:pr-12" : "md:pl-12"
                      } w-full`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white dark:bg-slate-900/70 p-6 sm:p-8 rounded-lg shadow-lg"
                      >
                        <div className="flex items-center mb-4">
                          <div
                            className={`p-3 rounded-lg ${getTypeColor(
                              exp.type
                            )} text-white mr-4`}
                          >
                            <IconComponent className="text-xl" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                              {exp.title}
                            </h3>
                            <p className="text-[#0D9488] font-semibold">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <FaCalendarAlt className="mr-2" />
                          {exp.period}
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-[#0D9488]/10 dark:bg-[#0D9488]/20 text-[#0D9488] text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
