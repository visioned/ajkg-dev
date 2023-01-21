import React from 'react';
import Image from 'next/image';
import spirals from '../public/images/vertex.svg';

const Background = () => {
  return (
    <div className='flex relative animate__animated animate__fadeIn '>
      <Image
        src={spirals}
        style={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
          right: '40px',
          top: '380px',
          overflow: 'visible',

        }}
        alt='spirals'
        className='opacity-30 dark:opacity-5 z-0 py-4 origin-center rotate-45'
      />
    </div>
  );
};

export default Background;
