import Traceback from "../components/Traceback"

const Investigate = () => {
  const nodes = [
    {
      label: 'origin',
      position: {
        x: 0,
        y: 300
      }
    },
    {
      label: 'node 1',
      position: {
        x: 400,
        y: 250
      }
    },
    {
      label: 'node 2',
      position: {
        x: 300,
        y: 350
      }
    },
    {
      label: 'node 3',
      position: {
        x: 500,
        y: 350
      }
    },
    {
      label: 'node 4',
      position: {
        x: 400,
        y: 400
      }
    },
    {
      label: 'end',
      position: {
        x: 800,
        y: 300
      }
    }
  ]
  const connections = [
    { source: '1', target: '2' },
    { source: '1', target: '3' },
    { source: '1', target: '5' },
    { source: '3', target: '4' },
    { source: '1', target: '6' },
    { source: '2', target: '6', animated: true },
    { source: '4', target: '6', animated: true },
    { source: '5', target: '6', animated: true },
    
  ];
  
  return (
    <div class="traceback-container">

      <Traceback nodesIn={nodes} connections={connections} />
    </div>
  )
}

export default Investigate
