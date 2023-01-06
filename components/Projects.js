import React from 'react';
import Image from 'next/image';
import spirals from '../public/images/vertex.svg';

const Index = () => {
  return (
    <section>
      <div className='flex justify-center pt-10'>
        <h2 className='text-4xl font-bold'>Projects</h2>
      </div>
      <Image
        src={spirals}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          objectFit: 'cover',
          left: '0px',
          top: '-300px',
          scale: '2',
          filter: 'inherit',
          rotate: '90deg',
        }}
        alt='...'
        className='opacity-30 dark:opacity-10 z-0'
      />
    </section>
  );
};

export default Index;
