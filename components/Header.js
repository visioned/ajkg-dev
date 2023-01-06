import React from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import { useTheme } from 'next-themes';
import Button from './Button';
import Link from 'next/link';

const Index = () => {
  const { theme, setTheme } = useTheme();

  const darkLight = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <Button
          className='bg-gray-200 dark:bg-[#3e3f4b] z-10'
          onClick={() => setTheme('light')}
        >
          <BiSun />
        </Button>
      );
    } else {
      return (
        <Button className='bg-gray-100 z-10' onClick={() => setTheme('dark')}>
          <BiMoon />
        </Button>
      );
    }
  };

  return (
    <header>
      <div className='flex justify-between px-7 text-3xl '>
        <h1 className='cursor-pointer z-10 '><Link href='/'></Link>ajkg.dev</h1>
        {darkLight()}

        {/* <BiSun
          className='cursor-pointer'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        /> */}
        
      </div>
    </header>
  );
};

export default Index;
