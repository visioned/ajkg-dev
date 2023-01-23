import Image from 'next/image';
import Button from './Button';
import { HiExternalLink } from 'react-icons/hi';

const Card = ({ project }) => {
  return (
    <div className='flex justify-center overflow-hidden transition-all ease duration-200 bg-gray-100 dark:bg-[#3e3f4b] rounded-2xl w-[385px] h-[520px] drop-shadow-lg'>
      <div>
        <div className='w-[385px] h-[300px] rounded-2xl drop-shadow-lg hover:-translate-y-6 transition-all duration-500 hover:drop-shadow-xl'>
          <Image
            className='flex justify-center p-4 rounded-2xl'
            src={`${project.src}`}
            width={385}
            height={240}
            alt='asdf'
          />
        </div>

        <div>
          <h2 className='text-2xl px-4 items-center flex'>
            {`${project.title}`}
            <Button>
              <a href={`${project.href}`}>
                <HiExternalLink />
              </a>
            </Button>
          </h2>
          <p className='max-w-sm text-sm p-4 font-karla'>{`${project.description}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

// <div className='bg-gray-200 rounded-2xl w-[375px] h-[420px] flex justify-center drop-shadow-lg'>
// <div className='p-4'>
//   <div className='bg-[#333333] w-[350] h-[240] rounded-2xl hover:-translate-y-8 drop-shadow-xl hover:scale-105'>
//     <Image
//       className='rounded-2xl '
//       src='/images/placeholder.png'
//       width={350}
//       height={240}
//       alt='asdf'
//     />
//   </div>
//   <div>
//     <h2 className='text-3xl pt-4'>Title</h2>
//     <p className='max-w-xs pt-4'>
//       This is some information about the title item. just adding some text
//       to make sure the spacing is fit well.
//     </p>
//   </div>
// </div>
// </div>
