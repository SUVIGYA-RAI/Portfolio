import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeInOut",
      },
    },
  }
}

export default function About() {
  const [cgpa, setCgpa] = useState(0)
  const [days, setDays] = useState(0)
  const [projects, setProjects] = useState(0)

  useEffect(() => {
    let cgpaInterval = setInterval(() => {
      setCgpa((prev) => {
        if (prev >= 7) {
          clearInterval(cgpaInterval)
          return 7
        }
        return prev + 1
      })
    }, 300)

    let daysInterval = setInterval(() => {
      setDays((prev) => {
        if (prev >= 400) {
          clearInterval(daysInterval)
          return 400
        }
        return prev + 1
      })
    }, 10)

    let projectsInterval = setInterval(() => {
      setProjects((prev) => {
        if (prev >= 5) {
          clearInterval(projectsInterval)
          return 5
        }
        return prev + 1
      })
    }, 500)

    return () => {
      clearInterval(cgpaInterval)
      clearInterval(daysInterval)
      clearInterval(projectsInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary/10 via-black/30 to-black/10 text-blue-300 flex items-center justify-center px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          show: { transition: { staggerChildren: 0.2 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl w-full items-center"
      >
        <motion.div
          variants={fadeIn("left", 0.3)}
          className="flex flex-col items-center justify-center md:justify-end"
        >
          <div className="bg-gradient-to-br from-purple-800/40 to-black/40 rounded-2xl border-2 border-white/20 hover:border-pink-500 transition-colors shadow-lg p-6 backdrop-blur-md w-full sm:w-[90%] md:w-[85%] h-[340px] sm:h-[380px] md:h-[420px] flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              </div>

              <pre className="text-xs sm:text-sm md:text-base text-pink-200 whitespace-pre-wrap">
                {`class Developer {
  constructor() {
    this.name = "Suvigya Rai";
    this.skills = ["Web Dev", "UI/UX", "Competitive Coding", "Data Modelling", "Data Analysis"];
    this.passion = "Building beautiful experiences";
  }
}`}
              </pre>
            </div>

            <div className="text-pink-500 font-mono mt-4">Coding Profile</div>
          </div>

          <motion.div
            variants={fadeIn("up", 0.6)}
            className="flex justify-center gap-6 sm:gap-12 mt-6 text-center"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-pink-400">
                {cgpa}+
              </h2>
              <p className="text-xs sm:text-sm text-gray-300">CGPA</p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-pink-400">
                {days}+
              </h2>
              <p className="text-xs sm:text-sm text-gray-300">
                Active Coding Days
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-pink-400">
                {projects}+
              </h2>
              <p className="text-xs sm:text-sm text-gray-300">
                Projects Completed
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.5)}
          className="flex flex-col justify-center px-2 sm:px-0"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-blue-300">
            About <span className="text-pink-500">Me</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 mb-10">
            I&apos;m a passionate{" "}
            <span className="text-pink-500">fullstack developer</span> with a
            love for creating elegant, user-friendly digital experiences. With a
            strong background in computer science and design, I blend{" "}
            <span className="text-pink-500">creativity</span> and{" "}
            <span className="text-pink-500">technical excellence</span> to bring
            every idea to life.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Web Development",
                desc: "Building responsive and modern web apps with clean UI.",
                icon: "💻",
              },
              {
                title: "Data Analyst",
                desc: "Visualising large data sets and enhancing decision making.",
                icon: "📊",
              },
              {
                title: "UI/UX Design",
                desc: "Designing intuitive, aesthetic, and user-friendly interfaces.",
                icon: "🎨",
              },
              {
                title: "Performance Optimization",
                desc: "Improving speed, memory, and fluidity across platforms.",
                icon: "⚡",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn("up", 0.7 + idx * 0.2)}
                whileHover={{ scale: 1.05 }}
                className="p-5 rounded-2xl border-2 border-white/20 hover:border-pink-500 transition-colors shadow-md"
              >
                <div className="text-2xl sm:text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-pink-500">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}