import React from "react";
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2024",
    image: "/certificates/fullstack.jpg",
    link: "https://your-verification-link.com"
  },
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2023",
    image: "/certificates/react.jpg",
    link: "https://your-verification-link.com"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        My Certificates
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-gray-600">{cert.issuer}</p>
              <p className="text-gray-500 text-sm mb-3">{cert.date}</p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                View Certificate →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;