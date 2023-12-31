import React, { useState, useEffect } from "react";
import LoadingText from "../components/LoadingText";

export default function SnowTracker() {
  const [data, setData]: any = useState([]);
  useEffect(() => {
    fetch("https://esteem-api.quinnpatwardhan.com/get-snowy-cities")
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        setData(r);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5em" }}>
      {data != undefined && data.cities !== undefined ? (
        data?.cities.map((city: any, index: any) => {
          return (
            <div className="box">
              <img
                src={"https://static.thenounproject.com/png/3638321-200.png"}
                style={{ width: "10em", padding: "1em" }}
              />
              <h1 style={{ fontSize: "2.25em", padding: 0 }}>
                {city.city}, {city.state}
              </h1>
              <h2 style={{ padding: 0, fontWeight: "100" }}>
                {Math.round(
                  city.snowfall_hours.reduce(
                    (partialSum: any, a: any) => partialSum + a,
                    0
                  ) * 100
                ) / 100}
                in snow - next 90 hours
              </h2>
            </div>
          );
        }) ?? <LoadingText />
      ) : (
        <LoadingText />
      )}
    </div>
  );
}
