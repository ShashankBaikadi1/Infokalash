import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { FaReact } from "react-icons/fa6";


function Custom_n_seven({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
        <div className=' p-[6px]  border '>
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <div className='h-12 w-12 bg-white  rounded-lg'>
      <FaReact  className='h-12 w-12 p-2 text-blue-700' />
      </div>
     
      <Handle type="source" position={Position.Right} id="b" isConnectable={isConnectable} />
      </div>
    </div>
  );
}

export default Custom_n_seven;
