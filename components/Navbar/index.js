import React from 'react';

const Index = () => {
  return (
    <nav className='flex justify-center'>
      <ul className='flex py-2'>
        <li className='mx-2'>
          <a className='text-m' href='#about'>
            About
          </a>
        </li>
        <li className='mx-2'>
          <a className='text-m' href='#projects'>
            Projects
          </a>
        </li>
        <li className='mx-2'>
          <a className='text-m' href='#tools'>
            Tools
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Index;
