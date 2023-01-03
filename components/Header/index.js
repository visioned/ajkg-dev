import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

const Index = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav>
      <div className='flex justify-between py-10 text-2xl'>
        <h1 className='text-xl font-semibold cursor-pointer'>ajkg.dev</h1>
        <BsFillMoonStarsFill
          className='cursor-pointer'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      </div>
    </nav>
  );
};

export default Index;
