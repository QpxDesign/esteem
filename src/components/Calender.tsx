import React, { useState, useEffect } from "react";
import Geocode from "react-geocode";
import CalenderSquare from "./CalenderSquare";

export default function Calender() {
  const [lowTemperatures, setLowTemperatures]: any = useState([]);
  const [highTemperatures, setHighTemperatures]: any = useState([]);

  const [weathercodes, setWeathercodes]: any = useState([]);
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
              setWeathercodes(r4.daily?.weathercode);
              setLowTemperatures(r4.daily.temperature_2m_min);
              setHighTemperatures(r4.daily.temperature_2m_max);
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
        <CalenderSquare
          date={"1"}
          weathercode={weathercodes[0]}
          high_tmp={highTemperatures[0]}
          low_tmp={lowTemperatures[0]}
        />
        <CalenderSquare
          date={"2"}
          weathercode={weathercodes[1]}
          high_tmp={highTemperatures[1]}
          low_tmp={lowTemperatures[1]}
        />
        <CalenderSquare
          date={"3"}
          weathercode={weathercodes[2]}
          high_tmp={highTemperatures[2]}
          low_tmp={lowTemperatures[2]}
        />
        <CalenderSquare
          date={"4"}
          weathercode={weathercodes[3]}
          high_tmp={highTemperatures[3]}
          low_tmp={lowTemperatures[3]}
        />
        <CalenderSquare
          date={"5"}
          weathercode={weathercodes[4]}
          high_tmp={highTemperatures[4]}
          low_tmp={lowTemperatures[4]}
        />
        <CalenderSquare
          date={"6"}
          weathercode={weathercodes[5]}
          high_tmp={highTemperatures[5]}
          low_tmp={lowTemperatures[5]}
        />
        <CalenderSquare
          date={"7"}
          weathercode={weathercodes[6]}
          high_tmp={highTemperatures[6]}
          low_tmp={lowTemperatures[6]}
        />
      </div>
      <div className="cal-row">
        <CalenderSquare
          date={"8"}
          weathercode={weathercodes[7]}
          high_tmp={highTemperatures[7]}
          low_tmp={lowTemperatures[7]}
        />
        <CalenderSquare
          date={"9"}
          weathercode={weathercodes[8]}
          high_tmp={highTemperatures[8]}
          low_tmp={lowTemperatures[8]}
        />
        <CalenderSquare
          date={"10"}
          weathercode={weathercodes[9]}
          high_tmp={highTemperatures[9]}
          low_tmp={lowTemperatures[9]}
        />
        <CalenderSquare
          date={"11"}
          weathercode={weathercodes[10]}
          high_tmp={highTemperatures[10]}
          low_tmp={lowTemperatures[10]}
        />
        <CalenderSquare
          date={"12"}
          weathercode={weathercodes[11]}
          high_tmp={highTemperatures[11]}
          low_tmp={lowTemperatures[11]}
        />
        <CalenderSquare
          date={"13"}
          weathercode={weathercodes[12]}
          high_tmp={highTemperatures[12]}
          low_tmp={lowTemperatures[12]}
        />

        <CalenderSquare
          date={"14"}
          weathercode={weathercodes[13]}
          high_tmp={highTemperatures[13]}
          low_tmp={lowTemperatures[13]}
        />
      </div>
      <div className="cal-row">
        <CalenderSquare
          date={"15"}
          weathercode={weathercodes[14]}
          high_tmp={highTemperatures[14]}
          low_tmp={lowTemperatures[14]}
        />
        <CalenderSquare
          date={"16"}
          weathercode={weathercodes[15]}
          high_tmp={highTemperatures[15]}
          low_tmp={lowTemperatures[15]}
        />
        <CalenderSquare
          date={"17"}
          weathercode={weathercodes[16]}
          high_tmp={highTemperatures[16]}
          low_tmp={lowTemperatures[16]}
        />
        <CalenderSquare
          date={"18"}
          weathercode={weathercodes[17]}
          high_tmp={highTemperatures[17]}
          low_tmp={lowTemperatures[17]}
        />
        <CalenderSquare
          date={"19"}
          weathercode={weathercodes[18]}
          high_tmp={highTemperatures[18]}
          low_tmp={lowTemperatures[18]}
        />
        <CalenderSquare
          date={"20"}
          weathercode={weathercodes[19]}
          high_tmp={highTemperatures[19]}
          low_tmp={lowTemperatures[19]}
        />

        <CalenderSquare
          date={"21"}
          weathercode={weathercodes[20]}
          high_tmp={highTemperatures[20]}
          low_tmp={lowTemperatures[20]}
        />
      </div>
      <div className="cal-row">
        <CalenderSquare
          date={"22"}
          weathercode={weathercodes[21]}
          high_tmp={highTemperatures[21]}
          low_tmp={lowTemperatures[21]}
        />
        <CalenderSquare
          date={"23"}
          weathercode={weathercodes[22]}
          high_tmp={highTemperatures[22]}
          low_tmp={lowTemperatures[22]}
        />
        <CalenderSquare
          date={"24"}
          weathercode={weathercodes[23]}
          high_tmp={highTemperatures[23]}
          low_tmp={lowTemperatures[23]}
        />
        <CalenderSquare
          date={"25"}
          weathercode={weathercodes[24]}
          high_tmp={highTemperatures[24]}
          low_tmp={lowTemperatures[24]}
        />
        <CalenderSquare
          date={"26"}
          weathercode={weathercodes[25]}
          high_tmp={highTemperatures[25]}
          low_tmp={lowTemperatures[25]}
        />
        <CalenderSquare
          date={"27"}
          weathercode={weathercodes[26]}
          high_tmp={highTemperatures[26]}
          low_tmp={lowTemperatures[256]}
        />

        <CalenderSquare
          date={"28"}
          weathercode={weathercodes[27]}
          high_tmp={highTemperatures[27]}
          low_tmp={lowTemperatures[27]}
        />
      </div>
      <div className="cal-row">
        <CalenderSquare
          date={"29"}
          weathercode={weathercodes[28]}
          high_tmp={highTemperatures[28]}
          low_tmp={lowTemperatures[28]}
        />
        <CalenderSquare
          date={"30"}
          weathercode={weathercodes[29]}
          high_tmp={highTemperatures[29]}
          low_tmp={lowTemperatures[29]}
        />
        <CalenderSquare
          date={"31"}
          weathercode={weathercodes[30]}
          high_tmp={highTemperatures[30]}
          low_tmp={lowTemperatures[30]}
        />
      </div>
    </div>
  );
}
