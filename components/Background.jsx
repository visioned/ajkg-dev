import React from 'react';
import Image from 'next/image';
import spirals from '../public/images/vertex.svg';

const Background = () => {
  return (
    <div className='animate__animated animate__fadeIn animate__delay-1s'>
      <Image
        src={spirals}
        style={{
          width: '100%',
          height: '90vh',
          position: 'absolute',
          right: '20px',
          bottom: '142px',
          filter: 'inherit',
          overflow: 'visible',
        }}
        alt='spirals'
        className='opacity-30 dark:opacity-10 z-0 py-4'
      />
    </div>
  );
};

export default Background;
