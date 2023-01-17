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
        <p className='flex justify-center text-center font-karla max-w-md py-4'>
          I&apos;m always down for something new and my inbox is open for fresh
          ideas. Whether you have a question or just want to say hello, hit me
          up!
          <br />
          <br />
        </p>
        <span className=' flex items-center font-bold'>
          Lets make some moves together!
        </span>
        <div className='flex pt-14'>
          <Button className='h-12 w-48 bg-green-500 flex justify-evenly items-center'>
            <p className='text-xl'>Say Hello</p>
            <GrSend className='text-2xl' />
          </Button>
        </div>
      </div>
      <div className='flex space-x-4 justify-center pt-20'>
        <SiInstagram className={`${icons}`} />
        <SiLinkedin className={`${icons}`} />
        <SiDiscord className={`${icons}`} />
        <SiGithub className={`${icons}`} />
      </div>
    </section>
  );
};

export default Contact;
