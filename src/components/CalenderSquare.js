import React from "react";
import wmo_codes from "../assets/wmo-codes.json";
export default function CalenderSquare(props) {
  return (
    <div className="box">
      <h5
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          margin: 5,
          fontSize: "1.25em",
        }}
      >
        {props.date}
      </h5>
      <img src={wmo_codes[props.weathercode]?.day.image} />
      <h2>{wmo_codes[props.weathercode]?.day.description}</h2>
      <h2>
        {props.high_tmp} / {props.low_tmp}
      </h2>
    </div>
  );
}
