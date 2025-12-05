import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import portImg from "../assets/portimage.jpg";
import { Link } from "react-router";

export default function Hero() {
  const imageRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // GSAP animations for image float effect
    gsap.to(imageRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Rotate circle decoration
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:p-8"
    >
      <motion.main
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-50/50 to-transparent dark:from-teal-900/20 dark:to-transparent" />
          <div className="absolute -top-20 -left-20 w-60 h-60 border-2 border-teal-200 dark:border-teal-800 rounded-full opacity-30" />
          <div className="absolute bottom-10 left-40 w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full opacity-30" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="px-6 sm:px-10 lg:px-12 py-16 lg:py-24 text-center lg:text-left z-10"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white leading-tight"
              >
                Hello, I'm Soheb Akhter Badhan
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-4 text-2xl sm:text-3xl font-semibold text-[#0D9488]"
              >
                Web Developer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 text-slate-600 dark:text-slate-400 text-base max-w-md mx-auto lg:mx-0"
              >
                I am a Full-Stack Web Developer with extensive experience of
                over 4 years. My expertise is in creating & designing websites,
                Mobile Apps, and Desktop Applications.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Link
                  target="_blank"
                  to="https://drive.google.com/file/d/1USZ8LdcXvxghPIPb5X6MG4OA5Z8gHogY/view?usp=sharing"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-3 font-semibold text-sm border border-[#0D9488] text-[#0D9488] rounded-md hover:bg-[#0D9488] hover:text-white transition-all duration-300"
                >
                  RESUME
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-3 font-semibold text-sm bg-[#0D9488] text-white rounded-md hover:bg-teal-700 transition-colors"
                >
                  CONTACT US
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-96 lg:h-full flex items-end"
            >
              <div
                ref={circleRef}
                className="absolute -left-32 -bottom-20 w-96 h-96 lg:w-[480px] lg:h-[480px] border-[16px] border-teal-100/50 dark:border-teal-900/50 rounded-full"
              />
              <img
                alt="Portrait of Soheb Akhter, a web developer."
                className="w-full max-w-md mx-auto lg:max-w-none h-auto object-contain object-bottom relative z-10 mt-8 lg:mt-0 rounded-2xl"
                src={portImg}
              />
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
