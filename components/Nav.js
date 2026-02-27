import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
  HiAcademicCap,
} from 'react-icons/hi2';

export const navData = [
  { name: 'Home', path: '/', icon: <HiHome /> },
  { name: 'About', path: '/about', icon: <HiUser /> },
  { name: 'Skills', path: '/skills', icon: <HiRectangleGroup /> },
  { name: 'Project', path: '/project', icon: <HiViewColumns /> },
  { name: 'Certificate', path: '/certificate', icon: <HiAcademicCap /> },
  { name: 'Contact', path: '/contact', icon: <HiEnvelope /> },
];

import Link from 'next/link';
import { useRouter } from 'next/router'; 

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl-max-w-m xl:h-screen'>
      <div className='flex xl:flex-col items-center justify-between xl:justify-center gap-y-7 p-4 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl rounded-3xl'>
        {navData.map((link, index) => (
          <Link
            className={`${
              link.path === pathname ? 'text-pink-600' : ''
            } relative flex items-center group hover:text-pink-600 transition-all duration-300`}
            key={index}
            href={link.path}
          >
            <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                <div className='text-[12px] leading-none font-semibold'>
                  {link.name}
                </div>
                <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
              </div>
            </div>
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;