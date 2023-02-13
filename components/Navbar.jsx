import React from 'react';
import Link from 'next/link';

const Index = () => {
  const navigation = [
    { label: 'About', path: '#about', id: 1 },
    // { label: 'Tools', path: '#tools', id: 2 },
    { label: 'Projects', path: '#projects', id: 3 },
  ];
  return (
    <nav className='font-karla text-md flex justify-center z-10 '>
      <ul className='flex py-2 '>
        {navigation.map((nav) => {
          return (
            <li key={nav.id} className='mx-4 animate__animated animate__fadeInUp'>
              <Link href={nav.path} scroll={false}>
                {nav.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Index;
