import Image from 'next/image';

function ToolCard({ tool }) {
  return (
    // card drop-shadow-[0_11px_11px_rgba(252,255,0,0.09)]
    <a
      href={`${tool.href}`}
      target='blank'
      className='flex flex-col justify-evenly dark:bg-[#3e3f4b] bg-gray-100 w-[100px] h-[115px] shadow-md hover:shadow-lg hover:scale-110 rounded-2xl'
    >
      {/* card // icon + text*/}
      <div className='flex justify-center drop-shadow'>
        <Image
          className={`${tool.class} py-1 drop-shadow-lg`}
          src={tool.src}
          height={`${tool.height}`}
          width={`${tool.width}`}
          alt={tool.alt}
          placeholder='blur'
          blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMjBjMzIuNjQgMCA2MC0yNy4zNiA2MC02MHMtMjcuMzYtNjAtNjAtNjQtNjAgMjcuMzYtNjAgNjAgMjcuMzYgNjAgNjB6bTAgLTQwYzI0Ljg4IDAgNDQgMTkuMTIgNDQgNDQtMCAyNC44OC0xOS4xMiA0NC00NCAwLTI0Ljg4LTE5LjEyLTQ0LTQ0eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik01MCAyMGMzMi42NCAwIDYwLTI3LjM2IDYwLTYwcy0yNy4zNi02MC02MC02NC02MCAyNy4zNi02MCA2MCAyNy4zNiA2MCA2MHptMCAtNDBjMjQuODggMCA0NCAxOS4xMiA0NCA0NC0wIDI0Ljg4LTE5LjEyIDQ0LTQ0IDAtMjQuODgtMTkuMTItNDQtNDQtMjQuODgtMjQuODgtNDQtNDQtNDQeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=='
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
