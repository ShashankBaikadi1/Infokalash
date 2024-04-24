import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { FaAws } from "react-icons/fa6";
const handleStyle = { left: 10 };

function Custom_node_one({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <label className='items-center justify-center ' htmlFor="text">Amazon Web Services</label>
      <div className='h-12 w-38 bg-white   rounded-lg '>
      <FaAws className='h-12 w-12 p-2 text-center ml-[6vh]' />
      </div>
      {/* <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      /> */}
      <Handle type="source" position={Position.Right}  isConnectable={isConnectable} />
    </div>
  );
}

export default Custom_node_one;
