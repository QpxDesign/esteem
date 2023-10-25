import React,{useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Calender from "./components/Calender";
import CloudCover from "./components/CloudCover"

function App() {
  const [page,setPage] = useState("Historical")
  return (
    <div className="App">
      <h1 style={{ fontFamily: "monospace", textAlign: "center" }}>
        Esteem: Historical Weather Data Explorer
      </h1>
      <div style={{display:'flex',justifyContent:"center",width:"100%",marginBottom:".5em"}}>
      <button className={page === "Historical" ? "nav-button active" : "nav-button"} onClick={() => {
        setPage("Historical")
      }}>Historical</button>
      <button className={page === "Cloud Cover" ? "nav-button active" : "nav-button"} onClick={() => {
        setPage("Cloud Cover")
      }}>Cloud Cover Forecast</button>
      </div>
      {
        page === "Historical" ? <Calender /> : <CloudCover />
      }
    </div>
  );
}

export default App;
