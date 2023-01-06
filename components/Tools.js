/* eslint-disable react/jsx-key */
import React from 'react';
import Image from 'next/image';
import tools from '../pages/api/data.json';

const Index = () => {
  return (
    <section id='tools' className='min-h-screen flex flex-col pt-48'>
      <h2 className='flex justify-center text-4xl font-bold'>Tools</h2>
      <p className='py-2 font-karla flex justify-center tracking-wide'>
        its a playground
      </p>

      {/* column */}
      <div className='flex flex-wrap pt-5 gap-4 justify-center'>
        {tools.map((tool) => {
          return (
            // card
            <div className='z-10 dark:bg-[#3e3f4b] bg-gray-100 w-[110px] h-[130px] shadow-md hover: hover:drop-shadow-[0_11px_11px_rgba(252,255,0,0.09)] rounded-2xl hover:scale-110 transition ease-in duration-100 focus:' >
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
            </div>
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
