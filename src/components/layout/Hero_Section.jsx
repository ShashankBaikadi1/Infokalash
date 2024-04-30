

import { useCallback, useState, useEffect } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges,Background,Controls,Panel,Position,ReactFlowProvider}  from 'reactflow';
import 'reactflow/dist/style.css';
import { FaSnowflake } from "react-icons/fa";

import {Custom_node_one }from '../custom_nodes/Custom_node_one.jsx';
import Custom_n_two from '../custom_nodes/Custom_n_two.jsx';
import Custom_n_three from '../custom_nodes/Custom_n_three.jsx';
import Custom_n_four from '../custom_nodes/Custom_n_four.jsx';
import Custom_n_six from '../custom_nodes/Custom_n_six.jsx';
import Custom_n_five from '../custom_nodes/Custom_n_five.jsx';
import Custom_n_seven from '../custom_nodes/Custom_n_seven.jsx';
import backgroundImage from '../../assets/bg-gradient.jpg';//pink
import ViewportLogger from '../dev_tools/ViewportLogger';




import NodeInspector from '../dev_tools/NodeInspector';


const initialNodes = [
  { id: 'node-1', type: 'textUpdater', position: { x: 835.7, y: -172.3 }, data: { value: 123 } },
  { id: 'node-2', type: 'textUpdater_two', position: { x: 871.3, y: 13.7 }, data: { value: 123 } },
  { id: 'node-3', type: 'textUpdater_three', position: { x: 800, y: 155}, data: { value: 123 } },
  // { id: '3', type: 'default', position: { x: 300, y: 285}, data: { value: 123 } },
  { id: 'dummy', type: 'default', position: { x: 300, y: 285}, data: { value: 123 }, style: { visibility: 'hidden' } },
  // {
  //   id: 'node-5',
  //   type: 'default',
  //   data: {
  //     label:  <div className='h-[17vh] w-[17vh] bg-violet-300  rounded-full flex  items-center justify-center ml-[2px]'>
  //     <FaSnowflake  className='h-12 w-12  text-blue ' />
  //     </div>,
  //   },
  //   className: 'rounded-full',
  //   position: { x: 400, y: 200 },
  //   sourcePosition: Position.Right,
  //   targetPosition: Position.Left,
  // },
  { id: 'node-4', type: 'textUpdater_four', position: { x: 1143, y: 15 }, data: { value: 123 } ,pos:Position.Right},
  { id: 'node-6', type: 'textUpdater_six', position: { x: 1500, y: 252 }, data: { value: 123 } },
  { id: 'node-7', type: 'textUpdater_seven', position: { x: 1419, y: 62 }, data: { value: 123 } },
  { id: 'node-8', type: 'textUpdater_five', position: { x: 1365, y: -114 }, data: { value: 123 } },

];

const initialEdges = [
  { id: 'e1-4', source: 'node-1', target: 'node-4', animated: true },
  { id: 'e2-4', source: 'node-2', target: 'node-4', animated: true },
  { id: 'e3-4', source: 'node-3', target: 'node-4', animated: true },
  // { id: 'e4-4', source: 'node-4', target: 'node-6', animated: true ,type: 'smoothstep'},
  { id: 'e4-4', source: 'node-4', target: 'node-6', animated: true },
  // { id: 'e5-5', source: 'node-2', target: 'node-5', animated: true },
  { id: 'e7-4', source: 'node-4', target: 'node-7', animated: true },
  { id: 'e8-4', source: 'node-4', target: 'node-8', animated: true },
];

const nodeTypes = { textUpdater: Custom_node_one, textUpdater_two: Custom_n_two, textUpdater_three: Custom_n_three,textUpdater_four: Custom_n_four ,textUpdater_five: Custom_n_five, textUpdater_six: Custom_n_six, textUpdater_seven: Custom_n_seven };



function Hero_Section() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);


  useEffect(() => {
    const handleScroll = (e) => {
      window.scrollBy(0, e.deltaY);
    };
  
    window.addEventListener('wheel', handleScroll, { passive: false });
  
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
<div className='' >
    {/* <div className='w-[80vh]'> <Card/></div> */}
  
    <div className='h-[90vh] w-full ml-[vh]'  style={{ backgroundImage: `url(${backgroundImage})` }}>

        <ReactFlowProvider>
    
        <div style={{ position: 'absolute', height: '25%', width: '100%' }}>
        {/* <div className='ml-20 mt-[20vh] bg-white z-50 relative w-5 rounded-md'>
         <Card/>
         </div> */}

        <Background
          variant="dots"
          gap={16}
          size={1}
     
        />
        
     
      </div >

   <ReactFlow
  nodes={nodes}
  edges={initialEdges}
  onNodesChange={onNodesChange}
  onEdgesChange={onEdgesChange}
  onConnect={onConnect}
  nodeTypes={nodeTypes}
  fitView
  zoomOnScroll={false}
  // nodesDraggable={false}
  elementsSelectable={true}
//  nodeDragThreshold={10}

  
/>

<Panel position={Position.Top}> <div className='h-[30vh] w-[70vh] rounded-xl  opacity-90 p-5 mt-[30vh] ml-12'><div className=' flex text-6xl justify-center  font-bold  text-black'>Wire Your Ideas</div>
<p className=' flex  p-2 mr-4 text-6xl  justify-center font-bold  text-black'>with <h1 className='text-indigo-500 ml-2'>Infokalash</h1></p>
<p className=' flex  p-2 ml-4 text-2xl  justify-center font-semibold  text-gray'>Any Data Domain, Any Data Volume, Any Industry, And Deployment. In Us, Your Trust.</p>


</div></Panel>

{/* <NodeInspector/>
<ViewportLogger /> */}
        </ReactFlowProvider>
    
    </div>
    </div>
  );
}

export default Hero_Section;



