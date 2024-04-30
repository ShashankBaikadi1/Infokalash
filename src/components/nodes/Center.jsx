import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

export function Center({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />

      <div className='h-[10vh] w-[10vh] bg-white border  border-indigo-500  rounded-full '>
        <div className='mt-3 ml-4'>
          <svg width="40" height="42" viewBox="0 0 514 457" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M324 0H511L349.75 227.5L188.5 455H0L324 0Z" fill="black"/>
            <path d="M323.012 454.995L513.049 454.994L427.31 336.755L348.019 227.498L256.003 359.5L323.012 454.995Z" fill="black"/>
            <circle cx="96.5" cy="72" r="72" fill="#38B6FF"/>
          </svg>
        </div>
      </div>
   
      <Handle type="source" position={Position.Right}  isConnectable={isConnectable} />
    </div>
  );
}