/* eslint-disable react/jsx-key */
import React from 'react';
import Image from 'next/image';
import tools from '../pages/api/data.json';
import spiral from '../public/images/.svg';

const Index = () => {
  return (
    <section id='tools' className='min-h-screen flex flex-col pt-48'>
      <h2 className='flex justify-center text-4xl font-bold'>Tools</h2>
      <p className='py-2 font-karla flex justify-center tracking-wide'>
        its a playground
      </p>
      <Image
        src={spiral}
        style={{
          width: '100%',
          height: '85%',
          position: 'relative',
          objectFit: 'fill',
          left: '0px',
          top: '0px',
          bottom: '0px',
          right: '0px',
        }}
        alt='...'
        className='opacity-30 dark:opacity-5 z-0 '
      />
      {/* column */}
      <div className='flex flex-wrap pt-5 gap-4 justify-center'>
        {tools.map((tool) => {
          return (
            // card drop-shadow-[0_11px_11px_rgba(252,255,0,0.09)]
            <button className='z-10 dark:bg-[#3e3f4b] bg-gray-100 w-[110px] h-[130px] shadow-md hover:shadow-xl rounded-2xl hover:scale-110 transition top-0.5 ease-in duration-100'>
              {/* card // icon + text*/}
              <div className='flex my-3 justify-center drop-shadow '>
                <Image
                  className={`${tool.class} drop-shadow-md`}
                  src={tool.src}
                  height={`${tool.height}`}
                  width={`${tool.width}`}
                  alt={tool.alt}
                />
              </div>

              <p className='flex justify-center font-karla'>{tool.title}</p>
            </button>
          );
        })}
      </div>

      {/* <div className='flex flex-wrap justify-center gap-2'>
        <div className='basis-auto'>
          <div className='border h-[75px] w-[75px]'>
            <p>React</p>
          </div>
        </div>

        <div className='basis-auto'>
          <div className='border h-[75px] w-[75px]'>
            <p>React</p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Index;
