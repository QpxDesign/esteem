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
      <img src={wmo_codes[props.data.weathercode[props.date - 1]]?.day.image} />
      <h2>
        {wmo_codes[props.data.weathercode[props.date - 1]]?.day.description}
      </h2>
      <h2>
        {props.data.temperature_2m_max[props.date - 1]}F /{" "}
        {props.data.temperature_2m_min[props.date - 1]}F
      </h2>
      {props.data.snowfall_sum[props.date - 1] > 0.5 ? (
        <h2 style={{ fontWeight: "100", fontSize: "1.2em", marginTop: 0 }}>
          {Math.round(props.data.snowfall_sum[props.date - 1] * 100) / 100}in
          snow
        </h2>
      ) : (
        <></>
      )}
    </div>
  );
}
