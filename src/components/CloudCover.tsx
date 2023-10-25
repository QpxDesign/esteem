import React, { useState, useEffect } from "react";
import FormatDate from "../utils/FormatDate"
export default function CloudCover() {
  const [city, setCity] = useState("")
  const [data,setData] : any = useState({})
  const [geolocatedCity, setGeolocatedCity] = useState("")
  function getData() {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyD5CJjZdOQuyqnnnKpbXWrHvyYspbVDzxo`;

    fetch(url)
      .then((r) => r.json())
      .then((r2) => {
          if (r2?.results[0].formatted_address === undefined) return
          setGeolocatedCity(r2?.results[0].formatted_address);

          fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${r2?.results[0].geometry.location.lat}&longitude=${r2?.results[0].geometry.location.lng}&hourly=temperature_2m,cloudcover`
          )
            .then((r3) => r3.json())
            .then((r4: any) => {
              setData(r4);
              console.log(r4)
            });

      });
  }
  return (
    <div>
      <div>
        <input
          onChange={(e) => setCity(e.target.value)}
          value={city}
          placeholder="city"
        />
        <button onClick={() => {getData();}}>Forecast</button>
      </div>
      <h3
        style={{
          fontFamily: "monospace",
          fontSize: "1.25em",
          fontWeight: "100",
          margin: ".25em",
        }}
      >
        Showing Results for: {geolocatedCity}
      </h3>
      <div style={{display:'flex',flexDirection:'column',justifyContent:"center",alignItems:"flex-start",marginTop:"1em"}} >
      {data?.hourly?.cloudcover?.map((item: any, index: any) => {
        return <div style={{display:'flex',justifyContent:'center',backgroundColor:'#f1f5f9',width:'min(50em,90%)',position:"relative"}}>
             <h2 style={{zIndex:5}}>{item}% - {FormatDate(data?.hourly?.time[index])}</h2>
              <div style={{position:"absolute", width: Number(item) + "%",left:0,bottom:0,backgroundColor:'#94a3b8 ',height:"100%",zIndex:1}}></div>

              </div>
        })}
      </div>


</div>
)
}
