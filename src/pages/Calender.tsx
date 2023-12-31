import React, { useState, useEffect } from "react";
import Geocode from "react-geocode";
import CalenderSquare from "../components/CalenderSquare";

export default function Calender() {
  const [data, setData]: any = useState({});

  const [month, setMonth]: any = useState("01"); // FORMAT: JANUARAY = 01
  const [year, setYear]: any = useState("2022");

  const [city, setCity]: any = useState("Boston");
  const [error, setError]: any = useState(false);

  const [geolocatedCity, setGeolocatedCity]: any = useState("");
  function getData() {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyD5CJjZdOQuyqnnnKpbXWrHvyYspbVDzxo`;

    fetch(url)
      .then((r) => r.json())
      .then((r2) => {
        if (
          r2.results.length === 0 ||
          year.length !== 4 ||
          year > 2022 ||
          year < 1960
        ) {
          setError(true);
          console.log("erro");
        } else {
          setGeolocatedCity(r2?.results[0].formatted_address);
          fetch(
            `https://archive-api.open-meteo.com/v1/archive?latitude=${r2?.results[0].geometry.location.lat}&longitude=${r2.results[0].geometry.location.lng}&start_date=${year}-${month}-01&end_date=${year}-${month}-31&daily=weathercode,temperature_2m_max,temperature_2m_min,snowfall_sum&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`
          )
            .then((r3) => r3.json())
            .then((r4: any) => {
              console.log(r4.daily);
              setData(r4.daily);
            });
        }
      });
  }
  useEffect(() => {
    getData();
  }, [month, year, city]);
  return (
    <div>
      <div>
        <input
          onChange={(e) => setCity(e.target.value)}
          value={city}
          placeholder="city"
        />
        <select onChange={(e) => setMonth(e.target.value)} value={month}>
          <option
            value="01"
            onChange={() => {
              setMonth("01");
            }}
          >
            January
          </option>
          <option
            value="02"
            onChange={() => {
              setMonth("02");
            }}
          >
            February
          </option>
          <option
            value="03"
            onChange={() => {
              setMonth("03");
            }}
          >
            March
          </option>
          <option
            value="04"
            onChange={() => {
              setMonth("04");
            }}
          >
            April
          </option>
          <option
            value="05"
            onChange={() => {
              setMonth("05");
            }}
          >
            May
          </option>
          <option
            value="06"
            onChange={() => {
              setMonth("06");
            }}
          >
            June
          </option>
          <option
            value="07"
            onChange={() => {
              setMonth("07");
            }}
          >
            July
          </option>
          <option
            value="08"
            onChange={() => {
              setMonth("08");
            }}
          >
            August
          </option>
          <option
            value="09"
            onChange={() => {
              setMonth("09");
            }}
          >
            September
          </option>
          <option
            value="10"
            onChange={() => {
              setMonth("10");
            }}
          >
            October
          </option>
          <option
            value="11"
            onChange={() => {
              setMonth("11");
            }}
          >
            November
          </option>
          <option
            value="12"
            onChange={() => {
              setMonth("12");
            }}
          >
            December
          </option>
        </select>
        <input
          onChange={(e) => setYear(e.target.value)}
          value={year}
          placeholder="year"
          type="number"
        />
        <button
          onClick={() => {
            getData();
          }}
        >
          Search
        </button>
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
      <div className="cal-row">
        <CalenderSquare date={"1"} data={data} />
        <CalenderSquare date={"2"} data={data} />
        <CalenderSquare date={"3"} data={data} />
        <CalenderSquare date={"4"} data={data} />
        <CalenderSquare date={"5"} data={data} />
        <CalenderSquare date={"6"} data={data} />
        <CalenderSquare date={"7"} data={data} />
      </div>
      <div className="cal-row">
        <CalenderSquare date={"8"} data={data} />
        <CalenderSquare date={"9"} data={data} />
        <CalenderSquare date={"10"} data={data} />
        <CalenderSquare date={"11"} data={data} />
        <CalenderSquare date={"12"} data={data} />
        <CalenderSquare date={"13"} data={data} />

        <CalenderSquare date={"14"} data={data} />
      </div>
      <div className="cal-row">
        <CalenderSquare date={"15"} data={data} />
        <CalenderSquare date={"16"} data={data} />
        <CalenderSquare date={"17"} data={data} />
        <CalenderSquare date={"18"} data={data} />
        <CalenderSquare date={"19"} data={data} />
        <CalenderSquare date={"20"} data={data} />

        <CalenderSquare date={"21"} data={data} />
      </div>
      <div className="cal-row">
        <CalenderSquare date={"22"} data={data} />
        <CalenderSquare date={"23"} data={data} />
        <CalenderSquare date={"24"} data={data} />
        <CalenderSquare date={"25"} data={data} />
        <CalenderSquare date={"26"} data={data} />
        <CalenderSquare date={"27"} data={data} />

        <CalenderSquare date={"28"} data={data} />
      </div>
      <div className="cal-row">
        <CalenderSquare date={"29"} data={data} />
        <CalenderSquare date={"30"} data={data} />
        <CalenderSquare date={"31"} data={data} />
      </div>
    </div>
  );
}
