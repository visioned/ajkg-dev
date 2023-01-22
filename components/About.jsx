import React from 'react';
import Image from 'next/image';

const Index = () => {
  return (
    <section
      id='about'
      className='min-h-[50vh] pt-1 transition-all ease duration-200'
    >
      <div className='flex flex-col justify-evenly items-center sm:flex-row '>
        <div className='mx-4 animate__animated animate__fadeIn'>
          <Image
            className='rounded-3xl drop-shadow-xl'
            src='/images/profile.jpg'
            height={325}
            width={325}
            alt='profile'
          />
        </div>
        <div className='py-10'>
          <h2 className='text-4xl font-bold'>About</h2>

          <p className='flex font-karla text-base max-w-md pt-2 leading-relaxed'>
            I&apos;m a person who loves to build things.
            <br />
            <br />
            I&apos;ve enjoyed the chance to drive projects and do hands-on work,
            and I&apos;ve learned a lot along the way.
            <br />
            <br />
            Moving forward, I hope to continue growing and learning as I take on
            new challenges and projects. I&apos;m always looking for
            opportunities to make a positive impact and contribute to something
            meaningful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
