import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
Chart.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
)

const getShading = (color) => {
  const div = document.createElement('div');
  div.style.backgroundColor = color;
  document.body.appendChild(div);
  const rgbaColor = getComputedStyle(div).backgroundColor;
  document.body.removeChild(div);
  return rgbaColor.replace('rgb', 'rgba').replace(')', `, ${0.2})`);
};



const ComplexLineGraph = ({graphTitle,dataSetIn}) => {
  // Sample data for the line chart
  const currentDate = new Date();
  let dateArray = [];

  // Get the day of the month as an integer (1-31)
  const thisMonth = currentDate.getDate();
  for (let i = 29; i >= 0; i--) {
    // Use the current date to create a new date for the current day - i
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - i);
  
    // Format the date as "Mon DD" (e.g., "Jan 21") without the comma
    const formattedDate = date.toLocaleString('en-US', { month: 'short', day: 'numeric' }).replace(',', '');
  
    dateArray.push(formattedDate);
  }

  function sumActivity(activity) {
    return activity.reduce((acc, value) => acc + value, 0);
  }

  

  let dataSetOut = []
  const template = {
    fill:true,
    tension: 0,
    pointRadius:0,
    pointStyle: 'line'
  } 
  dataSetIn.forEach(model => {
    let paddedActivity = model.activity.slice(); // Create a copy of the original array
  
    // Check if the array has less than 31 elements
    if (paddedActivity.length < 31) {
      const zerosToAdd = 31 - paddedActivity.length;
      // Create an array of zeros and concatenate it to the beginning of paddedActivity
      paddedActivity = Array(zerosToAdd).fill(0).concat(paddedActivity);
    }
  
    const tempObj = {
      ...template,
      data: paddedActivity,
      label: model.name,
      borderColor: model.color,
      backgroundColor: getShading(model.color)
    };
  
    dataSetOut.push(tempObj);
  });


  const [data, setData] = useState({
    labels: dateArray,
    datasets: dataSetOut,
  });

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'end',
        labels: {
          boxHeight: 1
        }
      },
      
    },
    maintainAspectRatio: false,
  };

  const [period, setPeriod] = useState(7)
  const [summaryTitle, setSummaryTitle] = useState('Last '+period+' days')
  
  const handleChange = (event) => {
    setPeriod(parseInt(event.target.value));
    
  };
  useEffect(() => {
      
    dataSetOut.forEach( object => {
      object.data = object.data.slice(-(period));
      //console.log(object.data)
    });

    const newDates = dateArray.slice(-(period))

    setData({
      labels: newDates,
      datasets: dataSetOut,
    })

    setSummaryTitle("last "+period+" days")
  }, [period])

  return (
    <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
      <div className="row-container-small" style={{justifyContent: "space-between", marginBottom: "10px"}}>
          <h2>{graphTitle}</h2>
          <select  className="dropdown-form" value={period} onChange={handleChange}>
            <option value="7">Past 7 days</option>
            <option value="30" selected>Past 30 days</option>
            <option value={thisMonth}>This Month</option>
          </select>
        </div>
      <div className = "graph-container-big" style={{position: "relative", flexGrow: "1"}}>
        <Line data={data} options={options} className="custom-legend"/>
        <div className="graph-summary">
          <h3>{summaryTitle}</h3>
          {dataSetIn.map((item) => (
            <div key={item.name} style={{ display: 'flex', alignItems:"center" }}>
                <div
                    style={{
                        width: '10px', // Bullet point width
                        height: '10px', // Bullet point height
                        borderRadius: "10px",
                        backgroundColor: item.color,
                        marginRight: '10px', // Spacing between bullet point and text
                    }}
                />
                <div style={{ flexGrow: 1, marginRight:"10px" }}>{item.name}</div>
                <div style={{ textAlign: 'right' }}>{sumActivity(item.activity)}</div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ComplexLineGraph;
