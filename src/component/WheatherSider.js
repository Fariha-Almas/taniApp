import React from "react";

export default function WheatherSider({ data, description }) {
  const temp = parseInt(data?.main?.temp);
  // console.log("parsont", temp);
  return (
    <div style={{ backgroundColor: "coral", padding: "50px" }}>
      <div>
        <h1>{data?.name}</h1>
        <h1>{temp}</h1>
      </div>
      <div>
        <img src="http://openweathermap.org/img/wn/01n@2x.png" />
        <p>{description}</p>
      </div>
    </div>
  );
}
