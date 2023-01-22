import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import avatar from '../public/images/headshot.png';

import 'animate.css';

const Index = () => {
  return (
    <section className='min-h-[60vh] transition-all ease duration-200'>
      <div className='flex flex-col mt-40'>
        <div className='flex justify-center'>
          <Image
            className='rounded-full border drop-shadow-2xl'
            alt='...'
            src={avatar}
            width={125}
            height={125}
          />
        </div>

        <h3 className='font-karla text-md my-2 tracking-[.6em] uppercase text-center animate__animated animate__fadeIn animate__delay-1s'>
          web developer
        </h3>

        <h1 class='text-5xl uppercase font-semibold text-center z-10 animate__animated animate__fadeIn'>
          aj gonzales
        </h1>

        <Navbar />
      </div>
    </section>
  );
};

export default Index;
