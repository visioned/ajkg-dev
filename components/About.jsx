import React from 'react';
import Image from 'next/image';

const Index = () => {
  return (
    <section
      id='about'
      className='min-h-[65vh] pt-1 transition-all ease duration-200'
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
            I&apos;m a person with a passion for cultivating experiences.
            <br />
            <br />
            My skills include development, design, and UX/UI. My greatest
            strength lies in my ability to think outside the box and approach
            problems from a creative perspective. I am a lifelong learner and
            I am always looking for new ways to grow.
            <br />
            <br />I am currently looking for a full-time position as a front-end
            or a UI/UX developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
