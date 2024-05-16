
/* eslint-disable react/prop-types */
import { useCallback, useState, useEffect } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Background, Controls, Panel, Position, ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';
import { FaReact } from "react-icons/fa";
import backgroundImage from '../../assets/bg-gradient.jpg'; //pink
import NodeInspector from '../dev_tools/NodeInspector';
import Custom_n_four from '../custom_nodes/Custom_n_four';
import { TopEight, TopFive, TopFour, TopNine, TopOne, TopSeven, TopSix, TopTen, TopThree, TopTwo } from '../nodes/Top';
import { LeftFour, LeftOne, LeftThree, LeftTwo } from '../nodes/Left';
import { Center } from '../nodes/Center';
import { RightOne } from '../nodes/Right';
import { Bottom } from '../nodes/Bottom';


// const initialNodes = [
//   {
//     id: 'node-4',
//     type: 'textUpdater',
//     position: { x: 1143, y: 15 },
//     data: { label: <div><FaReact className='h-12 w-12' /></div> },
//     pos: Position.Left,

//     iconSize: '12',
//     handlePositions: { target: Position.Left, source: Position.Right },
//   },
// ];
const initialNodes = [
{
    id: 'node-1',
    type: 'textUpdater',
    position: { x: 835.7, y: -172.3 },

    className: 'rounded-full',
    pos: Position.Right,

},
{
    id: 'node-11',
    type: 'TopTwo',
    position: { x: 935.7, y: -172.3 },

    className: 'rounded-full',
    pos: Position.Right,

},
{
    id: 'node-12',
    type: 'TopThree',
    position: { x: 1035.7, y: -172.3 },

    className: 'rounded-full',
    pos: Position.Right,

},
{
    id: 'node-13',
    type: 'TopFour',
    position: { x: 1135.7, y: -172.3 },
    className: 'rounded-full',
    pos: Position.Right,

},
{
    id: 'node-14',
    type: 'TopFive',
    position: { x: 1235.7, y: -172.3 },

    className: 'rounded-full',
    pos: Position.Right,

},
{
    id: 'node-15',
    type: 'TopSix',
    position: { x: 1335.7, y: -172.3 },

    className: 'rounded-full',
    pos: Position.Right,

},
{
    id: 'node-16',
    type: 'TopSeven',
    position: { x: 1435.7, y: -172.3 },

    className: 'rounded-full',
    pos: Position.Right,

},
{
    id: 'node-17',
    type: 'TopEight',
    position: { x: 1535.7, y: -172.3 },

    className: 'rounded-full',
    pos: Position.Right,

},
{
    id: 'node-18',
    type: 'TopNine',
    position: { x: 653, y: -674 },

    className: 'rounded-full',
    pos: Position.Right,

},
{
    id: 'node-19',
    type: 'TopTen',
    position: { x: 1735.7, y: -172.3 },

    className: 'rounded-full',
    pos: Position.Right,

},
{
    id: 'node-2',
    type: 'textUpdater_two',
    position: { x:441.7, y: -400.3 },

    className: 'rounded-full',
    pos: Position.Right,

},
{
    id: '2',
    type: 'LeftTwo',
    position: { x:441.7, y: -500.3 },

    className: 'rounded-full',
    pos: Position.Right,

},

{
    id: '3',
    type: 'LeftThree',
    position: { x:441.7, y: -600.3 },

    className: 'rounded-full',
    pos: Position.Right,

}
,
{
    id: '4',
    type: 'LeftFour',
    position: { x:441.7, y: -700.3 },

    className: 'rounded-full',
    pos: Position.Right,

},

{
    id: 'node-3',
    type: 'three',
    position: { x: 900.7, y: -172.3 },

    className: 'rounded-full',
    pos: Position.Right,

},
{
    id: 'node-4',
    type: 'four',
    position: { x: 1500.7, y: -172.3 },

    className: 'rounded-full',
    pos: Position.Right,

},
{
  id: 'b-1',
  type: 'Bottom',
  position: { x: 1200.7, y: -172.3 },

  className: 'rounded-full',
  pos: Position.Right,

}
  ];


const initialEdges = [
  { id: 'e1-6', source: 'node-1', target: 'node-8', animated: true },
]

const nodeTypes = { textUpdater:TopOne,TopTwo:TopTwo,TopThree:TopThree,TopFour:TopFour,TopFive:TopFive,TopSix:TopSix,TopSeven:TopSeven,TopEight:TopEight,TopNine:TopNine,TopTen:TopTen, textUpdater_two: LeftOne,LeftTwo:LeftTwo,LeftThree:LeftThree,LeftFour:LeftFour ,three:Center,four:RightOne,Bottom:Bottom};

function Canvas_Feature() {
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
    <div className=''>
      <div className='h-[90vh] w-full ml-[vh]' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <ReactFlowProvider>
          <div style={{ position: 'absolute', height: '17%', width: '100%' }}>
            <Background variant="dots" gap={16} size={1} />
          </div>
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
            // nodeDragThreshold={10}
          />
          {/* <NodeInspector /> */}
        </ReactFlowProvider>
      </div>
    </div>
  );
}

export default Canvas_Feature;
