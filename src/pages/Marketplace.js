import React from "react";

const Marketplace = () => {
  var marketItems = [
    {
      imgName: "aiicon.png",
      head: "AI Firewall",
      para: "Lorem ipsum dolor sit amet consectetur Gravida erat ornare elit at consequat egestas.",
      link: "",
    },
    {
      imgName: "dataicon.png",
      head: "Data Poisoning",
      para: "Lorem ipsum dolor sit amet consectetur Gravida erat ornare elit at consequat egestas.",
      link: "",
    },
    {
      imgName: "supplyicon.png",
      head: "Supply Chain Attack",
      para: "Lorem ipsum dolor sit amet consectetur Gravida erat ornare elit at consequat egestas.",
      link: "",
    },
    {
      imgName: "prompt.png",
      head: "Prompt Injection",
      para: "Lorem ipsum dolor sit amet consectetur Gravida erat ornare elit at consequat egestas.",
      link: "",
    },
  ];

  return (
    <div className="marketScreen">
      <div className="moduleHeader">
        <h1>Stealth Apps</h1>
        <a href="/market">
          View All
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
            >
              <path
                d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM1 6.75H13V5.25H1V6.75Z"
                fill="#537FF5"
              />
            </svg>
          </span>
        </a>
      </div>

      <div className="marketScreenmain">
        {marketItems.map((item) => (
          <div className="marketTile">
            <div>
              <span>
                <img src={`${process.env.PUBLIC_URL}/${item.imgName}`} alt="" />
              </span>
              <h2>{item.head}</h2>
            </div>
            <p>{item.para}</p>
            <a href={item.link}>
              Learn more
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    d="M5.49902 5.99999C5.4452 6.00031 5.39185 5.9898 5.34203 5.96907C5.29221 5.94835 5.24689 5.9178 5.20868 5.8792L1.11929 1.71396C1.04228 1.63553 0.999023 1.52915 0.999023 1.41823C0.999023 1.30731 1.04228 1.20093 1.11929 1.1225C1.19629 1.04406 1.30073 1 1.40964 1C1.51854 1 1.62298 1.04406 1.69998 1.1225L5.49902 4.99617L9.29807 1.1225C9.37507 1.04406 9.47951 1 9.58841 1C9.69731 1 9.80175 1.04406 9.87876 1.1225C9.95576 1.20093 9.99902 1.30731 9.99902 1.41823C9.99902 1.52915 9.95576 1.63553 9.87876 1.71396L5.78937 5.8792C5.75116 5.9178 5.70584 5.94835 5.65602 5.96907C5.60619 5.9898 5.55284 6.00031 5.49902 5.99999Z"
                    fill="#537FF5"
                    stroke="#537FF5"
                  />
                </svg>
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
