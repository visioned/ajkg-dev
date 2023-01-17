import 'animate.css';
import Card from './Card';
import data from '../json/data.json';
import Button from './Button';
import { useState } from 'react';
import SideProject from './SideProject';

const Index = () => {
  const [showMore, setShowMore] = useState(false);
  const [buttonText, setButtonText] = useState('Show More');
  let count = 0;
  const handleClick = () => {
    setShowMore(!showMore);
    setButtonText(buttonText === 'Show More' ? 'Show Less' : 'Show More');
  };

  return (
    <section id='projects' className='min-h-screen py-10'>
      <div>
        <div>
          <h2 className='flex justify-center text-4xl font-bold'>Projects</h2>
        </div>

        <div className='flex items-center gap-6 flex-col md:flex-row md:flex-wrap bg-[#33333] justify-around py-10 '>
          {data.projects.map((project) => {
            return (
              <div className='flex' key={project.title}>
                <Card project={project} />
              </div>
            );
          })}
        </div>
      </div>

      {/* side project card initial -- display 3 fixed*/}
      <h2 className='text-4xl flex justify-center py-10'>Small Projects</h2>
      <div className='flex flex-wrap md:gap-6 justify-center'>
        {data.side_projects.slice(0, 3).map((side_project) => {
          if (count < 3) {
            return (
              <div className='flex' key={side_project.title}>
                <SideProject side_project={side_project} />
              </div>
            );
            count++;
          }
        })}
      </div>
      {/* click "Show More" */}
      {showMore && (
        <div className='flex flex-wrap gap-6 justify-center'>
          {data.side_projects.slice(3).map((side_project) => {
            return (
              <div
                className='flex animate__animated animate__fadeIn'
                key={side_project.title}
              >
                <SideProject side_project={side_project} />
              </div>
            );
          })}
        </div>
      )}
      <div className='flex justify-center p-10'>
        <Button
          onClick={handleClick}
          className='bg-gray-100 dark:bg-[#3e3f4b] p-3 '
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default Index;
