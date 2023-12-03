import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = ({chartData}) => {
    const { labels, datasets } = chartData; 
    const data = {
        labels,
        datasets: datasets.map((dataset) => ({
          label: dataset.label,
          data: dataset.data,
          backgroundColor: dataset.backgroundColor,
          borderColor: dataset.borderColor,
          borderWidth: 1,
        })),
      };
      const options = {
        scales: {
          r: {
            min: 0,
            beginAtZero: true,
            angleLines: {
              display: true
            },
            ticks: {
              display: true,
            }
          }
        }
      };
    return (
        <div style={{height:"90%"}}>
        <Radar data={data} options={options} />
        </div>
    );
    
      

};

export default RadarChart

  
