import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { SiInformatica } from "react-icons/si";
const handleStyle = { left: 10 };

function Custom_n_five({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <div className='h-12 w-12 bg-white  rounded-lg'>
      <SiInformatica className='h-12 w-12 p-2 text-orange-500' />
      </div>
      {/* <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      /> */}
      <Handle type="source" position={Position.Right} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default Custom_n_five;
