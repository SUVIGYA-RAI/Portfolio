import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link
        href='/project'
        className='relative w-[148px] h-[148px] flex justify-center items-center group'
      >
        
        <Image
          src='/roundedtext.png' 
          width={148}
          height={148}
          alt='UI/UX Web Developer Badge'
          className='animate-spin-slow w-[148px] h-[148px] object-contain'
        />
        <HiArrowRight className='absolute text-3xl text-white group-hover:translate-x-2 transition-all duration-300' />
      </Link>
    </div>
  );
};

export default ProjectsBtn;