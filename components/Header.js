import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 z-30 w-full px-8 xl:px-16 h-[90px] flex items-center">
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <Image
            src="/LOGO.png"
            width={324}
            height={245}
            alt="Logo"
            priority={true}
          />
        </Link>
        <div className="hidden xl:flex">
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;