import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portImg2 from "../assets/port2.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imageRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    // Floating animation for profile image
    gsap.to(imageRef.current, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Rotate icons
    iconRefs.current.forEach((icon, index) => {
      if (icon) {
        gsap.to(icon, {
          rotation: 360,
          duration: 10 + index * 2,
          repeat: -1,
          ease: "none",
        });
      }
    });
  }, []);

  return (
    <div
      id="about"
      className="bg-[#F0F9FF] dark:bg-[#0C1421] font-['Playfair_Display'] text-slate-700 dark:text-slate-300 antialiased"
    >
      <div className="relative w-full flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 -mr-48 mt-20 w-96 h-96 bg-[#0D9488]/10 rounded-full filter blur-3xl opacity-50 dark:opacity-30"
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-0 left-0 -ml-32 mb-16 w-80 h-80 bg-[#0D9488]/5 rounded-full filter blur-3xl opacity-50 dark:opacity-20"
        />
        <main className="container mx-auto max-w-7xl z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex justify-center items-center"
            >
              <div className="absolute inset-0 bg-[#0D9488]/10 dark:bg-[#0D9488]/20 rounded-full transform scale-110 blur-xl" />
              <div
                className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full p-2"
                style={{
                  background:
                    "radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(248, 250, 252, 0) 70%)",
                }}
              >
                <div
                  className="relative w-full h-full rounded-full p-4"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, rgba(248, 250, 252, 0) 70%)",
                  }}
                >
                  <img
                    ref={imageRef}
                    alt="A professional portrait of a smiling web developer with glasses."
                    className="rounded-full w-full h-full object-cover shadow-lg"
                    src={portImg2}
                  />
                </div>
              </div>
              <motion.div
                ref={(el) => (iconRefs.current[0] = el)}
                whileHover={{ scale: 1.2 }}
                className="absolute top-8 right-0 sm:top-12 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-[#0D9488] text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
              >
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.972 2.624a3.83 3.83 0 0 0-3.83 3.833h2.32a1.51 1.51 0 0 1 1.51-1.511c.835 0 1.512.677 1.512 1.511 0 .834-.677 1.512-1.512 1.512H9.554v2.321h2.418c.835 0 1.512.677 1.512 1.512 0 .834-.677 1.512-1.512 1.512a1.51 1.51 0 0 1-1.51-1.512h-2.32c0 2.118 1.714 3.833 3.83 3.833s3.83-1.715 3.83-3.833c0-.986-.372-1.879-1.007-2.585.589-.661.92-1.51.92-2.428.001-2.118-1.713-3.833-3.829-3.833zm1.189 8.281v1.16H10.74v2.89h1.26v-1.73h1.16v1.73h1.258v-4.05h-2.417zm-6.19-2.285L5.758 6.3h1.282l.62 1.55.62-1.55h1.28l-1.213 2.321.113.207 1.259 2.14h-1.303l-.68-1.637-.682 1.637H5.66l1.26-2.14.112-.207z" />
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                </svg>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.p>About Me</motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-2 text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white"
                >
                  Who Am I
                </motion.h1>
              </div>
              <div className="space-y-6 text-base text-slate-600 dark:text-slate-400">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  I've created and updated websites for many different clients.
                  I worked with multiple CMS including WordPress, Joomla, and
                  Drupal, as well as created my own custom website management
                  system in Node.js.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-[#0D9488] mb-2">
                    I Can Develop Anything You Want
                  </h3>
                  <p>
                    As a passionate developer, my journey in coding began with a
                    simple "Hello, World!" and blossomed into a career building
                    robust and scalable web applications.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-[#0D9488] mb-2">
                    I Can Follow Digital Trends
                  </h3>
                  <p>
                    Beyond the screen, I'm an avid hiker, always looking for a
                    new trail to explore. I find that the logical thinking and
                    problem-solving skills from programming translate
                    surprisingly well to navigating the wilderness.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
