
// import { useCallback, useState } from 'react';
// import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges,Background,Position,ReactFlowProvider }  from 'reactflow';
// import 'reactflow/dist/style.css';
// import { FaSnowflake } from "react-icons/fa";
// import Custom_node_one from '../custom_nodes/Custom_node_one.jsx';
// import Custom_n_two from '../custom_nodes/Custom_n_two.jsx';
// import Custom_n_three from '../custom_nodes/Custom_n_three.jsx';
// import Custom_n_four from '../custom_nodes/Custom_n_four.jsx';
// import Custom_n_six from '../custom_nodes/Custom_n_six.jsx';
// import Custom_n_five from '../custom_nodes/Custom_n_five.jsx';
// import Custom_n_seven from '../custom_nodes/Custom_n_seven.jsx';
// import backgroundImage from '../../assets/bg-gradient.jpg'; // replace with your image path
// import { Card } from '../generic_comp/Card.jsx';




// const initialNodes = [
//   { id: 'node-1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
//   { id: 'node-2', type: 'textUpdater_two', position: { x: -100, y: 100 }, data: { value: 123 } },
//   { id: 'node-3', type: 'textUpdater_three', position: { x: -300, y: 250 }, data: { value: 123 } },
//   // {
//   //   id: 'node-5',
//   //   type: 'default',
//   //   data: {
//   //     label:  <div className='h-[17vh] w-[17vh] bg-violet-300  rounded-full flex  items-center justify-center ml-[2px]'>
//   //     <FaSnowflake  className='h-12 w-12  text-blue ' />
//   //     </div>,
//   //   },
//   //   className: 'rounded-full',
//   //   position: { x: 400, y: 200 },
//   //   sourcePosition: Position.Right,
//   //   targetPosition: Position.Left,
//   // },
//   { id: 'node-4', type: 'textUpdater_four', position: { x: 0, y: 350 }, data: { value: 123 } ,pos:Position.Right},
//   { id: 'node-6', type: 'textUpdater_six', position: { x: 500, y: 550 }, data: { value: 123 } },
//   { id: 'node-7', type: 'textUpdater_seven', position: { x: 600, y: 550 }, data: { value: 123 } },
//   { id: 'node-8', type: 'textUpdater_five', position: { x: 700, y: 550 }, data: { value: 123 } },

// ];

// const initialEdges = [
//   { id: 'e1-4', source: 'node-1', target: 'node-4',type: 'smoothstep'},
//   { id: 'e2-4', source: 'node-2', target: 'node-4', animated: true },
//   { id: 'e3-4', source: 'node-3', target: 'node-4', animated: true },
//   { id: 'e4-4', source: 'node-4', target: 'node-6', animated: true ,type: 'smoothstep'},
//   // { id: 'e5-5', source: 'node-2', target: 'node-5', animated: true },
//   { id: 'e7-4', source: 'node-4', target: 'node-7', animated: true },
//   { id: 'e8-4', source: 'node-4', target: 'node-8', animated: true },
// ];

// const nodeTypes = { textUpdater: Custom_node_one, textUpdater_two: Custom_n_two, textUpdater_three: Custom_n_three,textUpdater_four: Custom_n_four ,textUpdater_five: Custom_n_five, textUpdater_six: Custom_n_six, textUpdater_seven: Custom_n_seven };



// function Hero_Section() {
//   const [nodes, setNodes] = useState(initialNodes);
//   const [edges, setEdges] = useState([]);

//   const onNodesChange = useCallback(
//     (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
//     [setNodes]
//   );
//   const onEdgesChange = useCallback(
//     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
//     [setEdges]
//   );
//   const onConnect = useCallback(
//     (connection) => setEdges((eds) => addEdge(connection, eds)),
//     [setEdges]
//   );

//   return (
// <div className='flex'>
//     <div className='w-[80vh]'> <Card/></div>
   
//     <div className='h-[90vh] w-full ml-[vh]' style={{ backgroundImage: `url(${backgroundImage})` }}>

//         <ReactFlowProvider>
//         <div style={{ position: 'absolute', height: '80%', width: '100%' }}>
//         <Background
//           variant="dots"
//           gap={16}
//           size={1}
     
//         />
//       </div >

//    <ReactFlow
//   nodes={nodes}
//   edges={initialEdges}
//   onNodesChange={onNodesChange}
//   onEdgesChange={onEdgesChange}
//   onConnect={onConnect}
//   nodeTypes={nodeTypes}
//   fitView
// />

//         </ReactFlowProvider>
       
//     </div>
//     </div>
//   );
// }

// export default Hero_Section;



import { useCallback, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges,Background,Controls,Panel,Position,ReactFlowProvider}  from 'reactflow';
import 'reactflow/dist/style.css';
import { FaSnowflake } from "react-icons/fa";
import Custom_node_one from '../custom_nodes/Custom_node_one.jsx';
import Custom_n_two from '../custom_nodes/Custom_n_two.jsx';
import Custom_n_three from '../custom_nodes/Custom_n_three.jsx';
import Custom_n_four from '../custom_nodes/Custom_n_four.jsx';
import Custom_n_six from '../custom_nodes/Custom_n_six.jsx';
import Custom_n_five from '../custom_nodes/Custom_n_five.jsx';
import Custom_n_seven from '../custom_nodes/Custom_n_seven.jsx';
import backgroundImage from '../../assets/bg-gradient.jpg'; // replace with your image path
import { Card } from '../generic_comp/Card.jsx';


import NodeInspector from '../dev_tools/NodeInspector';


const initialNodes = [
  { id: 'node-1', type: 'textUpdater', position: { x: 316, y: -17 }, data: { value: 123 } },
  { id: 'node-2', type: 'textUpdater_two', position: { x: 330, y: 105 }, data: { value: 123 } },
  { id: 'node-3', type: 'textUpdater_three', position: { x: 300, y: 285}, data: { value: 123 } },
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
  { id: 'node-4', type: 'textUpdater_four', position: { x: 589, y: 188 }, data: { value: 123 } ,pos:Position.Right},
  { id: 'node-6', type: 'textUpdater_six', position: { x: 880, y: 389 }, data: { value: 123 } },
  { id: 'node-7', type: 'textUpdater_seven', position: { x: 875, y: 172 }, data: { value: 123 } },
  { id: 'node-8', type: 'textUpdater_five', position: { x: 863, y: 9 }, data: { value: 123 } },

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
  // nodesDraggable={false}
  // nodesConnectable={false}
/>

{/* <NodeInspector/> */}
        </ReactFlowProvider>
       
    </div>
    </div>
  );
}

export default Hero_Section;



// <ReactFlow
//   nodes={nodes}
//   edges={initialEdges}
//   onNodesChange={onNodesChange}
//   onEdgesChange={onEdgesChange}
//   onConnect={onConnect}
//   nodeTypes={nodeTypes}
//   fitView
//   nodesDraggable={false}
//   nodesConnectable={false}
// />