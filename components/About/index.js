import React from 'react';
import Image from 'next/image';

const Index = () => {
  return (
    <section className='min-h-screen flex'>
      <div className='flex-col'>
        <div className='py-2'>
          <Image
          className='rounded-3xl drop-shadow-lg'
            src='/images/profile.JPG'
            height={325}
            width={325}
            alt='profile'
          />
        </div>
        <div className='py-2'>
          <h2 className='text-4xl font-bold'>About</h2>

          <p className='text-md leading-8 max-w-xl'>
            Freelancer providing services for programming and design content
            needs. Join me down below and lets get cracking!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
