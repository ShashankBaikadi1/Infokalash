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
      <div className='h-12 w-12 bg-white border-2  rounded-lg'>
      <FaAws className='h-12 w-12 p-2' />
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
