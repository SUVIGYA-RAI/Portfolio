import Image from 'next/image'
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center pt-20 md:pt-28 xl:pt-40 xl:text-left h-full container mx-auto px-4">
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-blue-300 mb-6"
          >
            Transforming Ideas
            <br />
            Into <span className="text-pink-600">Digital Reality</span>
            <br /> & <span className="text-pink-600">Design </span>
            <br />
            <span className="text-amber-300 text-2xl"> Full Stack • Data • DevOps • UI/UX</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base xl:text-lg max-w-xs sm:max-w-md md:max-w-lg xl:max-w-xl mx-auto xl:mx-0 mb-8 sm:mb-10 xl:mb-16 text-white"
          >
            A full-stack engineer driven by UI/UX, data science, and DevOps. 
          I craft seamless digital products by building intelligent, user-focused applications — combining clean code, data-driven insights, scalable backend systems, and cloud-ready deployment pipelines.
          </motion.p>

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>

          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      <div className="w-full md:w-[900px] xl:w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-[url('/pink-explosion.png')] xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>

        <div>
          <ParticlesContainer />
        </div>

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full left-1/2 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] xl:max-w-[537px] max-h-[600px] absolute -bottom-20 sm:-bottom-28 md:-bottom-32 right-0 md:right-[5%] z-20"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
}

export default Home