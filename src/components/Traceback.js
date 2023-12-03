import React, { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Position
} from 'reactflow';


import 'reactflow/dist/style.css';


/**********************Initial Data***************************/


const nodeTemp = {
  id: 'x',
    data: {
      label: 'null',
    },
    position: { x: 0, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
}









/**********************End Of Initial Data***************************/



const minimapStyle = {
  height: 120,
};
const proOptions = { hideAttribution: true };

const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance);

const Traceback = ({nodesIn, connections}) => {
  let initialNodes = [];
  let nodeCount = 0
  nodesIn.forEach(element => {
    //console.log(element)
    nodeCount++
    const newNode = {...nodeTemp}
    //console.log(newNode.data.label)
    newNode.id = nodeCount.toString()
    
    newNode.data = {label : element.label}
    //console.log(newNode.data.label)
    newNode.position = {...element.position}
    initialNodes = [...initialNodes, newNode]
    
    console.log(initialNodes[0].data.label)
    
  });
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  if(false){
    setNodes(oldNodes => [...oldNodes])
  }
  
  const [edges, setEdges, onEdgesChange] = useEdgesState(connections);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find((node) => node.type === 'custom').data.selects[edge.sourceHandle];
      edge.type = edgeType;
    }

    return edge;
  });

  return (
    <ReactFlow
      nodes={nodes}
      edges={edgesWithUpdatedTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      proOptions={proOptions}
      onConnect={onConnect}
      onInit={onInit}
      fitView
      attributionPosition="top-right"
    >
      <MiniMap style={minimapStyle} zoomable pannable />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
};

export default Traceback;