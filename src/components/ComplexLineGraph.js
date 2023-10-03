import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from 'react-chartjs-2';
Chart.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
)



const ComplexLineGraph = ({graphTitle,dataSetIn, xLabels}) => {
  // Sample data for the line chart

  let dataSetOut = []
  const template = {
    fill:true,
    tension: 0.25
  } 
  dataSetIn.forEach(model => {
    const tempObj = {...template, data:model.activity , label:model.name , borderColor:model.color, backgroundColor: model.color}
    dataSetOut.push(tempObj)

    
  });


  const data = {
    labels: xLabels,
    datasets: dataSetOut,
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      title: {
        display: true,
        text: graphTitle,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className = "graph-container-big">
      <Line data={data} options={options} />
    </div>
  );
};

export default ComplexLineGraph;
