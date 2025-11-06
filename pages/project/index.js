"use client"

import ProjectSlider from "../../components/ProjectSlider"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

const Projects = () => {
  return (
    <div className="relative h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 py-20 md:py-28 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-12 items-center">
          <div className="text-center xl:text-left xl:w-[35%] space-y-6">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-3xl md:text-5xl font-semibold text-blue-300"
            >
              My <span className="text-pink-500">Projects</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-gray-300 max-w-md mx-auto xl:mx-0 text-base md:text-lg"
            >
              A showcase of my amazing work in web development and data science,
              highlighting my technical skills with a creative approach to build
              the best out of it.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[55%] space-y-10"
          >
            <ProjectSlider />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Projects