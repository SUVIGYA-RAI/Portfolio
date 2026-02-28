"use client"

import ProjectSlider from "../../components/ProjectSlider"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

const Projects = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-primary/10 via-black/30 to-black/10 py-24 flex items-center">

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-pink-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="w-full px-8 xl:px-20 pr-24 xl:pr-32">
        <div className="grid xl:grid-cols-[35%_65%] gap-16 items-center">

          {/* LEFT TEXT */}
          <div className="space-y-8 text-center xl:text-left">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="text-5xl md:text-6xl font-bold"
            >
              <span className="text-blue-300">My</span>{" "}
              <span className="text-pink-500">Projects</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto xl:mx-0"
            >
              A curated portfolio of projects spanning Full-Stack Development, DevOps practices, Data Analytics, and UI/UX Engineering — blending scalable architecture, cloud deployment, intelligent data systems, and refined design to deliver impactful, high-performance applications.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              className="w-28 h-[3px] bg-gradient-to-r from-pink-500 to-blue-400 rounded-full mx-auto xl:mx-0"
            />
          </div>

          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            className="w-full"
          >
            <div className=" backdrop-blur-lg  border-white/10 rounded-3xl p-10 shadow-2xl hover:border-pink-500/40 transition duration-500">
              <ProjectSlider />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Projects