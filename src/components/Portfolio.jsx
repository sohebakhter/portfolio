import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Portfolio() {
  const projects = [
    {
      name: "Blood Donation Platform",
      type: "Website",
      image: "https://i.ibb.co.com/jZZPJPRD/image.png",
      link: "https://github.com/sohebakhter/blood-donation-client.git",
    },
    {
      name: "PlateShare",
      type: "Website",
      image: "https://i.ibb.co.com/tT7b2SnZ/image.png",
      link: "https://github.com/sohebakhter/plate-share-client.git",
    },
    {
      name: "GameHub Store",
      type: "E-commerce",
      image: "https://i.ibb.co.com/v6rpBmrc/image.png",
      link: "https://github.com/sohebakhter/gamehub.git",
    },
    {
      name: "E-commerce Website",
      type: "E-commerce",
      image: "https://i.ibb.co.com/5WKby3Vv/image.png",
      link: "https://github.com/sohebakhter/ecommerce-client.git",
    },
  ];

  return (
    <div id="projects" className="bg-[#F0F9FF] dark:bg-[#0C1421]">
      <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 tracking-tight"
            >
              PROJECTS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 text-lg text-gray-500 dark:text-gray-400"
            >
              A showcase of our best work in web development and design.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md overflow-hidden cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-100 dark:bg-gray-700/30 p-4 sm:p-6 overflow-hidden"
                >
                  <img
                    alt={`Screenshot of the ${project.name} project`}
                    className="w-full h-auto object-cover rounded-md"
                    src={project.image}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="p-6 text-center"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {project.type}
                  </p>
                  <Link
                    to={project.link}
                    target="_blank"
                    // whileHover={{ scale: 1.05 }}
                    // whileTap={{ scale: 0.95 }}
                    className="mt-4 px-5 py-2 text-sm font-medium text-white bg-[#0D9488] rounded-full hover:bg-opacity-90 transition-colors"
                  >
                    View More
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
