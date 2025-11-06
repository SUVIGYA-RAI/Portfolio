import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava, FaDatabase, 
  FaPython, FaPhp, FaGithub, FaNodeJs 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiCplusplus, SiNextdotjs, SiGit, SiMysql, 
  SiCloudflare, SiPandas, SiNumpy, SiMongodb, SiExpress 
} from 'react-icons/si';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const techSkills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-200" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
  { name: 'Pandas', icon: <SiPandas className="text-blue-400" /> },
  { name: 'NumPy', icon: <SiNumpy className="text-green-400" /> },
  { name: 'Matplotlib', icon: <FaPython className="text-indigo-400" /> },
  { name: 'PHP', icon: <FaPhp className="text-indigo-500" /> },
  { name: 'PHPMailer', icon: <FaPhp className="text-blue-400" /> },
  { name: 'API Calling', icon: <FaReact className="text-teal-300" /> },
  { name: 'Git', icon: <SiGit className="text-orange-400" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-300" /> },
  { name: 'DBMS', icon: <FaDatabase className="text-green-400" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-300" /> },
  { name: 'Cloud Computing', icon: <SiCloudflare className="text-yellow-500" /> },
];

const softSkills = [
  'Team Collaboration',
  'Problem Solving',
  'Communication',
  'Time Management',
  'Adaptability',
  'Leadership',
  'Creativity',
  'Critical Thinking',
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-primary/10 via-black/30 to-black/10 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-blue-300"
        >
          My <span className="text-pink-500">Skills</span>
        </motion.h1>


        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-semibold mb-10 text-pink-300"
          >
            Technical Skills
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
          >
            {techSkills.map((skill, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="flex items-center gap-2 bg-white/5 text-gray-300 px-5 py-2 rounded-full text-sm border border-white/10 hover:border-pink-400 hover:text-pink-300 transition"
              >
                {skill.icon} {skill.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>


        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-semibold mb-10 text-purple-300"
          >
            Soft Skills
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
          >
            {softSkills.map((skill, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="bg-white/5 text-gray-300 px-5 py-2 rounded-full text-sm border border-white/10 hover:border-pink-400 hover:text-pink-300 transition"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}