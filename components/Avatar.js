import Image from "next/image"

const Avatar = () => {
  return <div className='hidden xl:flex xl:maaax-w-none'>
    <Image src={'/image.png'} width={595} height={737} alt=''className='translate-z-0 w-full h-full' />
  </div>;
};

export default Avatar;