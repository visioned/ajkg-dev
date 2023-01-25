import Button from './Button';
import { TbFolder } from 'react-icons/tb';
import { HiExternalLink } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';

function SideProject({ side_project }) {
  return (
    <div className='flex relative justify-center pt-4 z-10'>
      <div className='flex flex-col h-[275px] w-[325px] bg-gray-100 dark:bg-[#3e3f4b] border rounded-xl p-8 hover:-translate-y-2 transition-all duration-200 ease shadow-md'>
        <div className='flex justify-between'>
          <TbFolder className='text-5xl' />

          <div className='flex items-center'>
            <Button>
              <a href={`${side_project.git}`} rel='noreferrer' target='_blank'>
                <FiGithub className='text-[21px] mx-1' />
              </a>
            </Button>
            <Button>
              <a href={`${side_project.href}`} rel='noreferrer' target='_blank'>
                <HiExternalLink className='text-[25px] mx-1' />
              </a>
            </Button>
          </div>
        </div>

        <h2 className='text-2xl pt-4'>{side_project.title}</h2>
        <p className='pt-4 text-sm max-w-[17rem] font-karla'>
          {side_project.description}
        </p>
        <div className='flex absolute bottom-0 left-0 p-8'>
          <p className='text-xs text-slate-500 font-source-code-pro'>
            {side_project.tools}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideProject;
