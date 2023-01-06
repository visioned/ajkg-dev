import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import avatar from '../public/images/headshot.png';
import spirals from '../public/images/vertex.svg';

const Index = () => {
  return (
    <section className='min-h-[60vh] overflow-hidden '>
      <Image
        src={spirals}
        style={{
          width: '100%',
          height: '80vh',
          position: 'absolute',
          left: '0px',
          top: '0px',
          filter: 'inherit',
          overflow: 'visible'
        }}
        alt='...'
        className='opacity-30 dark:opacity-10 z-0'
      />

      <div className='flex flex-col mt-40'>
        <div className='flex justify-center '>
          <Image
            className='rounded-full border drop-shadow-2xl'
            alt='...'
            src={avatar}
            width={100}
            height={100}
          />
        </div>

        <h3 className='font-karla text-md my-2 tracking-[.6em] uppercase text-center'>
          web developer
        </h3>

        <h1 class='text-5xl uppercase font-semibold text-center z-10'>
          aj gonzales
        </h1>

        <Navbar />
      </div>
    </section>
  );
};

export default Index;
