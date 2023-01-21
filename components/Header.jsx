import React from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Button from './Button';
import Link from 'next/link';

const Index = () => {
  const { systemTheme, theme, setTheme } = useTheme('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const darkLight = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      return (
        <Button className='bg-[#3e3f4b] z-10' onClick={() => setTheme('light')}>
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
    <header className='px-5 overflow-hidden'>
      <div className='flex justify-between p-2 text-3xl animate__animated animate__slideInDown animate__fadeIn animate__delay-1s'>
        <h1 className='cursor-pointer z-10 '>
          <Link href='/'></Link>ajkg.dev
        </h1>
        {darkLight()}
      </div>
    </header>
  );
};

export default Index;

{
  /* <BiSun
          className='cursor-pointer'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        /> */
}
