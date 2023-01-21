import React from 'react';
import Button from './Button';
import { SiInstagram, SiLinkedin, SiDiscord, SiGithub } from 'react-icons/Si';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { GrSend } from 'react-icons/gr';

const Contact = () => {
  const icons = 'text-3xl cursor-pointer hover:scale-110 z-10';

  return (
    <section className='min-h-[50vh]'>
      <div className='flex justify-center '>
        <h2 className='font-bold text-4xl'>Contact</h2>
      </div>
      <div className='flex flex-col items-center py-4 justify-center'>
        <p className='flex justify-center text-center font-karla max-w-md py-4 leading-relaxed'>
          I&apos;m always down for something new and my inbox is open for fresh
          ideas. Whether you have a question or just want to say hello, hit me
          up!
          <br />
          <br />
        </p>
        <span className=' flex items-center font-karla'>
          Lets make some moves together!
        </span>
        <a href='mailto:hello@ajkg.dev' className='flex pt-14 hover:scale-110'>
          <Button className='h-12 w-48 bg-green-500 flex justify-evenly items-center'>
            <p className='text-xl'>Say Hello</p>
            <GrSend className='text-2xl ' />
          </Button>
        </a>
      </div>
      <div className='flex space-x-4 justify-center pt-20'>
        <a
          href='https://instagram.com/aj.gonzales'
          rel='noreferrer'
          target='_blank'
        >
          <SiInstagram className={`${icons}`} />
        </a>
        <a
          href='https://www.linkedin.com/in/ajkg'
          rel='noreferrer'
          target='_blank'
        >
          <SiLinkedin className={`${icons}`} />
        </a>
        <a href='https://github.com/visioned' rel='noreferrer' target='_blank'>
          <SiGithub className={`${icons}`} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
