import { BsArrowRight } from "react-icons/bs"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

const Contact = () => {
  return (
    <div className="h-full bg-gradient-to-b from-[#0f051d] to-[#0e031a] flex flex-col justify-between">
      <div className="container mx-auto py-20 sm:py-28 lg:py-32 flex items-center justify-center h-full px-4">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.2 } } }}
          className="w-full max-w-[700px]"
        >
          <motion.h2
            variants={fadeIn("down", 0.2)}
            className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold mb-10 sm:mb-12"
          >
            <span className="text-blue-300">Let&apos;s </span>
            <span className="text-pink-500">connect</span>
          </motion.h2>

          <motion.form
            variants={fadeIn("up", 0.3)}
            className="flex flex-col gap-6 w-full"
          >
            <motion.div
              variants={fadeIn("up", 0.4)}
              className="flex flex-col md:flex-row gap-6"
            >
              <motion.input
                variants={fadeIn("left", 0.5)}
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-white rounded-md focus:outline-none focus:border-pink-500 placeholder:text-white/60"
              />
              <motion.input
                variants={fadeIn("right", 0.6)}
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-white rounded-md focus:outline-none focus:border-pink-500 placeholder:text-white/60"
              />
            </motion.div>

            <motion.input
              variants={fadeIn("up", 0.7)}
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border border-white/20 px-4 py-3 text-white rounded-md focus:outline-none focus:border-pink-500 placeholder:text-white/60"
            />

            <motion.textarea
              variants={fadeIn("up", 0.8)}
              placeholder="Message"
              rows={4}
              className="w-full bg-transparent border border-white/20 px-4 py-3 text-white rounded-md resize-none focus:outline-none focus:border-pink-500 placeholder:text-white/60"
            ></motion.textarea>

            <motion.div
              variants={fadeIn("up", 0.9)}
              className="flex justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group overflow-hidden border border-white/40 rounded-full px-8 py-3 text-white hover:border-pink-500 transition-all duration-300"
              >
                <span className="transition-all duration-300 group-hover:translate-y-[-120%] group-hover:opacity-0">
                  Let&apos;s talk
                </span>
                <BsArrowRight className="absolute text-[22px] top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[120%] opacity-0 group-hover:translate-y-[-50%] group-hover:opacity-100 transition-all duration-300" />
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>

      <motion.footer
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-full bg-gradient-to-r from-[#1a0b2e] to-[#12071f] py-6 px-4 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center justify-between border-t border-white/10"
      >
        <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-300 text-center md:text-left">
          © 2026 All Rights Reserved
        </p>
        <p className="text-xs sm:text-sm md:text-base font-bold text-gray-300 mt-4 md:mt-0 text-center md:text-right">
          Made with <span className="text-pink-500">♥</span> By Suvigya Rai ✨
        </p>
      </motion.footer>
    </div>
  )
}

export default Contact