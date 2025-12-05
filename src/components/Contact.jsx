import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import img2 from "../assets/port2.jpg";

export default function Contact() {
  const imageRef = useRef(null);
  const circleRefs = useRef([]);

  useEffect(() => {
    // Float animation for image
    gsap.to(imageRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Pulse animation for circles
    circleRefs.current.forEach((circle, index) => {
      if (circle) {
        gsap.to(circle, {
          scale: 1.1,
          duration: 2 + index,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    });
  }, []);

  return (
    <div
      id="contact"
      className="bg-[#F0F9FF] dark:bg-[#0C1421] font-['Playfair_Display'] antialiased"
    >
      <main className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full max-w-lg mx-auto lg:mx-0"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  <svg
                    className="h-10 w-10 text-[#0D9488]"
                    fill="none"
                    viewBox="0 0 49 46"
                  >
                    <path
                      d="M26.2307 45.423C34.0512 45.423 45.1025 45.282 45.1025 35.1922C45.1025 25.1025 37.1922 25.1025 26.2307 25.1025C15.2692 25.1025 3.33331 25.1025 3.33331 35.1922C3.33331 45.282 18.4102 45.423 26.2307 45.423Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="6"
                    />
                    <path
                      d="M22.8461 0.743588C15.0256 0.743588 3.97434 0.884614 3.97434 10.9743C3.97434 21.0641 11.8846 21.0641 22.8461 21.0641C33.8077 21.0641 45.7436 21.0641 45.7436 10.9743C45.7436 0.884614 30.6666 0.743588 22.8461 0.743588Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="6"
                    />
                  </svg>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: "1.5rem" }}
                      transition={{ duration: 0.6 }}
                      className="h-px bg-gray-500 dark:bg-gray-400"
                    />
                    <p className="text-sm font-medium tracking-wider uppercase text-gray-600 dark:text-gray-400">
                      Contact
                    </p>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold text-[#0D9488] mt-2">
                    Get In Touch
                  </h1>
                </motion.div>
                <motion.form
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {["name", "email"].map((field, index) => (
                    <motion.div
                      key={field}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        htmlFor={field}
                      >
                        {field.charAt(0).toUpperCase() + field.slice(1)}:
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        className="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:border-[#0D9488] focus:ring-[#0D9488]"
                        id={field}
                        type={field === "email" ? "email" : "text"}
                      />
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      htmlFor="message"
                    >
                      Write Message:
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      className="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:border-[#0D9488] focus:ring-[#0D9488]"
                      id="message"
                      rows="4"
                    />
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-4 rounded-md text-sm font-medium text-white bg-[#0D9488] hover:bg-opacity-90 transition-colors"
                    type="submit"
                  >
                    CONTACT US
                  </motion.button>
                </motion.form>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  ref={(el) => (circleRefs.current[0] = el)}
                  className="w-[450px] h-[450px] bg-[#0D9488]/5 dark:bg-[#0D9488]/10 rounded-full"
                />
                <div
                  ref={(el) => (circleRefs.current[1] = el)}
                  className="absolute w-[550px] h-[550px] border border-[#0D9488]/10 dark:border-[#0D9488]/20 rounded-full"
                />
              </div>
              <img
                ref={imageRef}
                alt="A smiling man wearing glasses and a turtleneck, holding a smartphone."
                className="relative z-10 w-full max-w-md h-auto rounded-lg"
                src={img2}
              />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
