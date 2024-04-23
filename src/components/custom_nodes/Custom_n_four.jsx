import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };
import { FaSnowflake } from "react-icons/fa";
function Custom_n_four({ data, isConnectable, }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <div className='h-24 w-24 bg-white  rounded-lg flex  items-center justify-center'>
      <FaSnowflake  className='h-12 w-12 p-2 text-blue ' />
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
