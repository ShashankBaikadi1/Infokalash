import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

import {  Image } from "@chakra-ui/react";
import logo from '../../assets/logo.png';

const handleStyle = { left: 10 };

function Custom_n_four({ data, isConnectable, }) {
 

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <label  className="font-bold " htmlFor="text">WE DEAL WITH</label>
      <div className='h-24 w-24 bg-white  rounded-lg flex  items-center justify-center ml-2'>
      {/* <FaSnowflake  className='h-12 w-12 p-2 text-blue ' /> */}
      <Image src={logo} />
      </div>
      {/* <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      /> */}
      <Handle type="source" position={Position.Right} id="" isConnectable={isConnectable} />
    </div>
  );
}

export default Custom_n_four;
