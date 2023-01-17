import Button from './Button';
import { TbFolder } from 'react-icons/tb';
import { HiExternalLink } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';

function SideProject({ side_project }) {
  return (
    <div className='flex justify-center pt-4 z-0'>
      <div className='flex flex-col h-[275px] w-[325px] border rounded-xl p-4 hover:-translate-y-2 transition-all duration-300 ease-out shadow-md'>
        <div className='flex justify-between'>
          <TbFolder className='text-5xl' />

          <div className='flex items-center'>
            <Button>
              <FiGithub className='text-[21px] mx-1' />
            </Button>
            <Button>
              <HiExternalLink className='text-[25px] mx-1' />
            </Button>
          </div>
        </div>

        <h2 className='text-2xl pt-4'>{side_project.title}</h2>
        <p className='pt-4 text-sm max-w-[17rem] font-karla'>
          {side_project.description}
        </p>
        <p className='font-karla text-xs flex pt-20 text-slate-500'>
          {side_project.tools}
        </p>
      </div>
    </div>
  );
}

export default SideProject;