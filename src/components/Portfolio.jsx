import { motion } from 'framer-motion'

export default function Portfolio() {
  const projects = [
    {
      name: 'Gluzetology',
      type: 'Website',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEx7UT-1lXCxftImOVkS3SJomGojvx06YA28UfFIRKsl66Qt_cVLhFoU3_FX6MIzbT1BK-EhgYnfU4LO5O0O4lannwhCCteActLNrWC-CKd4bJLiH1ymGspLM743_eSZCoA9aCAVS0DUnjbwARpM4VFTcb61lilN0yjKA87W6hdWZG7I6SY0p46KyWyMFxzlP3R0tIL8e0Mp_aK7Z0MtbJwsVFQtcsv9dk4HRKvtyzIenJa_03t1ckCZVZlLjCmEIoSOzLzkoORvk'
    },
    {
      name: 'EcoDash',
      type: 'Dashboard',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjuDKXbEkMymX5QWpSCbal29QdVrJ9XBnxirhiZzCHFhRvFjTbwG8JoL94vg8XK9kmw_bsQjTi8t4cSq3EIEFsYK0Gjo-1VRcCT_l8XkQGA7WLB60PIGWTcOo2YVMLePpIzm_8dVhVGyr1y8AzO6l4nPKLJkOq8Bpy0aP_xA6-cxbE8gfTjSeE4Ymx5UuXhmVKlTzN-1b5-_nE0HbPyCWCwJqQKSKcttqt5NUzh8HG4zUNkDRj71v6sYkdIo6LfdpC-oF15mwpwn0'
    },
    {
      name: 'Artistry Platform',
      type: 'E-commerce',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHkm2nb2vwb_Q47B7tSQdnsr9fyxC9MAqgEIdyERw3WRffkt5y6sjZYmYHPkqzc7dJOVt3a4WwHOOVa98vUHBlUeymhMYFMC85QgouzTYWVXhG4GOcCs_CAsSq7Gyr8a30ql5cNnrJcbnaeQDoqILR8dM1m-BTYGiUCuYcgESrjVLR7lKdjGrSn4KwrgSees6vE2rUW1vD6prPXug3nJ0YyoHM9ecg6_ejYiPYWAIysdknOJivN2VuS3XUtdJK0nelFYtLZx2JmsU'
    }
  ]

  return (
    <div id="portfolio" className="bg-[#F0F9FF] dark:bg-[#0C1421]">
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
              Our Digital Creations
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
                  <img alt={`Screenshot of the ${project.name} project`} className="w-full h-auto object-cover rounded-md" src={project.image} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="p-6 text-center"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{project.type}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-5 py-2 text-sm font-medium text-white bg-[#0D9488] rounded-full hover:bg-opacity-90 transition-colors"
                  >
                    View More
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
