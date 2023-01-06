import React from 'react';
import Image from 'next/image';
import { SiInstagram, SiLinkedin, SiDiscord, SiGithub } from 'react-icons/Si';

const Index = () => {
  const icons = 'text-3xl cursor-pointer hover:scale-110 z-10';
  return (
    <section id='about' className='min-h-[70vh]'>
      <div className='flex space-x-4 justify-end pb-32 mt-10 mr-7 group-hover:scale-110'>
        <SiInstagram className={`${icons}`} />
        <SiLinkedin className={`${icons}`} />
        <SiDiscord className={`${icons}`} />
        <SiGithub className={`${icons}`} />
      </div>
      <div className='flex flex-col justify-between items-center sm:flex-row'>
        <div className='mx-4'>
          <Image
            className='rounded-3xl drop-shadow-xl'
            src='/images/profile.JPG'
            height={400}
            width={400}
            alt='profile'
          />
        </div>
        <div className='p-7'>
          <h2 className='text-4xl font-bold'>About</h2>

          <p className='flex leading-5 font-karla max-w-md'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
