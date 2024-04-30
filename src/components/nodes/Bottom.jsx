/* eslint-disable react/prop-types */

import { Handle, Position } from 'reactflow';
import image from '../../assets/images/vector1.png'

export function Bottom({ data, isConnectable }) {


  return (
    <div className="">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />

      <div className='h-[10vh] w-[10vh] bg-white border  border-indigo-500  rounded-full '>
        <div className='mt-2 ml-3 '>
       <img src={image} className='h-12' alt="Logo" />
        </div>
      </div>
   
      <Handle type="source" position={Position.Right}  isConnectable={isConnectable} />
    </div>
  );
}