"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import { motion } from "framer-motion";
import { EyeIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Ram Mobiles",
    category: "Web Application",
    img: "/shop.png", 
    repo: "https://github.com/SUVIGYA-RAI/ecommerce-mern-website",
    live: "https://ecommerce-mern-website-1.onrender.com/", 
  },
  {
    title: "Healthcare Assistant",
    category: "Web Application",
    img: "/aidoctor.png", 
    repo: "https://github.com/SUVIGYA-RAI/ca2-project",
    live: "#", 
  },
  {
    title: "Employee Attrition Predictor",
    category: "ML Data Modelling",
    img: "/employeee.png",
    repo: "https://github.com/SUVIGYA-RAI/Employee_Attrition_Predictor",
    live: "#",
  },
  {
    title: "Tech News Aggregator",
    category: "Web Application",
    img: "/code.jpg",
    repo: "https://github.com/SUVIGYA-RAI/TechBeacon",
    live: "#",
  },
  {
    title: "Portfolio Website",
    category: "Frontend",
    img: "/portfolioo.png",
    repo: "https://github.com/SUVIGYA-RAI/Portfolio",
    live: "https://suvigyarai.vercel.app",
  },
];

export default function ProjectSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      className="rounded-2xl"
    >
      {projects.map((project, i) => (
        <SwiperSlide key={i}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square max-w-[320px] w-full"
          >
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center gap-3 rounded-2xl">
              <h3 className="text-white text-lg font-semibold">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300">{project.category}</p>
              <div className="flex gap-4 mt-2">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1 bg-pink-500 rounded-lg text-white text-sm hover:bg-pink-600 transition"
                >
                  <EyeIcon className="w-4 h-4" /> Live
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1 bg-blue-500 rounded-lg text-white text-sm hover:bg-blue-600 transition"
                >
                  <ComputerDesktopIcon className="w-4 h-4" /> Code
                </a>
              </div>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}