import React from 'react';
import Image from 'next/image';
import Navbar from '../Navbar';

const Index = () => {
  return (
    <section className='min-h-screen flex items-center justify-center'>
      <div className='flex-col items-center'>
        <div className='flex justify-center'>
          <Image
            className='rounded-full drop-shadow-2xl'
            alt='A headshot of the developer'
            src='/images/headshot.png'
            width={100}
            height={100}
          />
        </div>

        <h3 className='text-xs my-2 tracking-[.75em] uppercase text-center'>
          web developer
        </h3>

        <h1 class='text-4xl font-extrabold uppercase'>aj gonzales</h1>

        <Navbar />
      </div>
    </section>
  );
};

export default Index;
