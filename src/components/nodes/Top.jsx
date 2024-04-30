import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { FaAws } from "react-icons/fa6";
const handleStyle = { left: 10 };

export function TopOne({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />

      <div className='h-5 w-[5vh] bg-white border  border-indigo-500  rounded-lg '>
<div className='text-center text-[10px]  '>ETL</div>
      </div>
   
      <Handle type="source" position={Position.Right}  isConnectable={isConnectable} />
    </div>
  );
}


export function TopTwo({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="">
    <Handle type="target" position={Position.Left} isConnectable={isConnectable} />

    <div className='h-5 w-[7vh] bg-white border  border-indigo-500  rounded-lg '>
<div className='text-center text-[10px]  '>Ingestion</div>
    </div>
 
    <Handle type="source" position={Position.Right}  isConnectable={isConnectable} />
  </div>
  );
}


export function TopThree({ data, isConnectable }) {
    const onChange = useCallback((evt) => {
      console.log(evt.target.value);
    }, []);
  
    return (
      <div className="">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
  
      <div className='h-5 w-[5vh] bg-white border  border-indigo-500  rounded-lg '>
  <div className='text-center text-[10px]  '>ELT</div>
      </div>
   
      <Handle type="source" position={Position.Right}  isConnectable={isConnectable} />
    </div>
    );
  }

  
  
export function TopFour({ data, isConnectable }) {
    const onChange = useCallback((evt) => {
      console.log(evt.target.value);
    }, []);
  
    return (
      <div className="">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
  
      <div className='h-7 w-[9vh] bg-white border  border-indigo-500  rounded-lg '>
  <div className='text-center text-[10px] mt-1  '>Reverse ELT</div>
      </div>
   
      <Handle type="source" position={Position.Right}  isConnectable={isConnectable} />
    </div>
    );
  }

  

  
export function TopFive({ data, isConnectable }) {
    const onChange = useCallback((evt) => {
      console.log(evt.target.value);
    }, []);
  
    return (
      <div className="">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
  
      <div className='h-5 w-[5vh] bg-white border  border-indigo-500  rounded-lg '>
  <div className='text-center text-[10px]  '>CDC</div>
      </div>
   
      <Handle type="source" position={Position.Right}  isConnectable={isConnectable} />
    </div>
    );
  }

  
  
export function TopSix({ data, isConnectable }) {
    const onChange = useCallback((evt) => {
      console.log(evt.target.value);
    }, []);
  
    return (
      <div className="">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
  
      <div className='h-5 w-[5vh] bg-white border  border-indigo-500  rounded-lg '>
  <div className='text-center text-[10px]  '>DQM</div>
      </div>
   
      <Handle type="source" position={Position.Right}  isConnectable={isConnectable} />
    </div>
    );
  }

  

  
export function TopSeven({ data, isConnectable }) {
    const onChange = useCallback((evt) => {
      console.log(evt.target.value);
    }, []);
  
    return (
      <div className="">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
  
      <div className='h-5 w-[8vh] bg-white border  border-indigo-500  rounded-lg '>
  <div className='text-center text-[10px]  '>DataOps</div>
      </div>
   
      <Handle type="source" position={Position.Right}  isConnectable={isConnectable} />
    </div>
    );
  }

  

  
export function TopEight({ data, isConnectable }) {
    const onChange = useCallback((evt) => {
      console.log(evt.target.value);
    }, []);
  
    return (
      <div className="">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
  
      <div className='h-5 w-[9vh] bg-white border  border-indigo-500  rounded-lg '>
  <div className='text-center text-[10px]  '>Data Fabric</div>
      </div>
   
      <Handle type="source" position={Position.Right}  isConnectable={isConnectable} />
    </div>
    );
  }

  


  
export function TopNine({ data, isConnectable }) {
    const onChange = useCallback((evt) => {
      console.log(evt.target.value);
    }, []);
  
    return (
      <div className="">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
  
      <div className='h-5 w-[5vh] bg-white border  border-indigo-500  rounded-lg '>
  <div className='text-center text-[10px]  '>ML</div>
      </div>
   
      <Handle type="source" position={Position.Right}  isConnectable={isConnectable} />
    </div>
    );
  }

  

  
export function TopTen({ data, isConnectable }) {
    const onChange = useCallback((evt) => {
      console.log(evt.target.value);
    }, []);
  
    return (
      <div className="">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
  
      <div className='h-5 w-[8vh] bg-white border  border-indigo-500  rounded-lg '>
  <div className='text-center text-[10px]  '>Insights</div>
      </div>
   
      <Handle type="source" position={Position.Right}  isConnectable={isConnectable} />
    </div>
    );
  }
  

