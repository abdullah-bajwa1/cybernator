import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from 'react-chartjs-2';
Chart.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
)



const SimpleLineGraph = ({graphTitle,dataPoints, xLabels}) => {
  // Sample data for the line chart
  const data = {
    labels: xLabels,
    datasets: [
      {
        label: 'ChatGPT',
        data: dataPoints,
        fill: true,
        borderColor: 'rgba(75,192,192,1)', // Line color
        backgroundColor: 'rgba(75,192,192,0.2)', // Area under the line color
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
      },
      title: {
        display: true,
        text: graphTitle,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className = "graph-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default SimpleLineGraph;
