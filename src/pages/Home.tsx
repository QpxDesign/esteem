import React, { useState } from "react";
import Calender from "./Calender";
import CloudCover from "./CloudCover";
import SnowTracker from "./SnowTracker";
import Blog from "./Blog";

interface HomePageProps {
  defaultViewMode: string;
}

export default function Home(props: HomePageProps) {
  const [page, setPage] = useState<string>(props.defaultViewMode);
  return (
    <div>
      <h1 style={{ fontFamily: "monospace", textAlign: "center" }}>
        Esteem: Historical Weather Data Explorer
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginBottom: ".5em",
          flexWrap: "wrap",
        }}
      >
        <button
          className={page === "Historical" ? "nav-button active" : "nav-button"}
          onClick={() => {
            setPage("Historical");
            window.location.pathname = "/historical";
          }}
        >
          Historical
        </button>
        <button
          className={
            page === "Cloud Cover" ? "nav-button active" : "nav-button"
          }
          onClick={() => {
            setPage("Cloud Cover");
            window.location.pathname = "/cloud-cover";
          }}
        >
          Cloud Cover Forecast
        </button>
        <button
          className={
            page === "SnowTracker" ? "nav-button active" : "nav-button"
          }
          onClick={() => {
            setPage("SnowTracker");
            window.location.pathname = "/snowtracker";
          }}
        >
          SnowTracker
        </button>
        <button
          className={page === "Blog" ? "nav-button active" : "nav-button"}
          onClick={() => {
            setPage("Blog");
            window.location.pathname = "/blog";
          }}
        >
          Blog
        </button>
      </div>

      {page === "Historical" ? (
        <Calender />
      ) : page === "Cloud Cover" ? (
        <CloudCover />
      ) : page === "SnowTracker" ? (
        <SnowTracker />
      ) : page === "Blog" ? (
        <Blog />
      ) : (
        ""
      )}
    </div>
  );
}
