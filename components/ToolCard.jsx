import Image from 'next/image';

function ToolCard({ tool }) {
  return (
    // card drop-shadow-[0_11px_11px_rgba(252,255,0,0.09)]
    <a
      href={`${tool.href}`}
      target='blank'
      className='z-10 flex flex-col justify-evenly dark:bg-[#3e3f4b] bg-gray-100 w-[100px] h-[115px] shadow-md hover:shadow-lg hover:scale-110 rounded-2xl transition-all ease-in duration-200'
    >
      {/* card // icon + text*/}
      <div className='flex justify-center drop-shadow transition-all ease duration-200'>
        <Image
          className={`${tool.class} py-1 drop-shadow-lg`}
          src={tool.src}
          height={`${tool.height}`}
          width={`${tool.width}`}
          alt={tool.alt}
        />
      </div>

      <p className='flex justify-center text-sm'>{tool.title}</p>
    </a>
  );
}

export default ToolCard;

{
  /* <div className='flex flex-wrap justify-center gap-2'>
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
      </div> */
}
