import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { RiInstagramLine } from "react-icons/ri";
import { HiDocumentText } from "react-icons/hi2";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <a
        href="/resume.pdf"
        download
        className="text-gray-300 hover:text-pink-400 transition duration-300"
      >
        <HiDocumentText size={24} />
      </a>
      <Link href="https://www.linkedin.com/in/suvigya-rai" target="_blank">
        <FaLinkedin className="hover:text-pink-500 transition-all duration-300" />
      </Link>
      <Link href="https://github.com/SUVIGYA-RAI" target="_blank">
        <FaGithub className="hover:text-pink-500 transition-all duration-300" />
      </Link>
      <Link href="https://leetcode.com/u/suvigyarai/" target="_blank">
        <SiLeetcode className="hover:text-pink-500 transition-all duration-300" />
      </Link>
      <Link href="https://instagram.com/" target="_blank">
        <RiInstagramLine className="hover:text-pink-500 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default Socials;