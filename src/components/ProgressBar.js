import { calculateColorCode } from "../utils";
import { useState, useEffect } from "react";

const ProgressBar = ({ percent, label }) => {

  const [value, setValue] = useState(0);
  const duration = 3000;
  const interval = 150;
  useEffect(()=> {
    const step = Math.ceil(percent/(duration/interval))
    const updateValue = ()=> {
      if(step > percent-value){
        setValue(percent)
      }else{
        setValue(value+step)
      }


    }
    const intervalId = setInterval(() => {
      if (value < percent) {
          updateValue();
      } else {
        clearInterval(intervalId);
      }
      }, interval);

    return (() => {
      clearInterval(intervalId);
    })


  },[value, percent] );
  

  return (
    <div className="highlight ultrawide">
        <div className="transition-width progress-bar" style={{ width: `${value}%`, backgroundColor: calculateColorCode(value) }}></div>
            <p>{label}: {value}%</p>
    </div>
                    
  );
};

export default ProgressBar;
