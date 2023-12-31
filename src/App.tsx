import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calender from "./pages/Calender";
import CloudCover from "./pages/CloudCover";
import SnowTracker from "./pages/SnowTracker";
import BlogPost from "./pages/BlogPost";
import {
  BrowserRouter as Router,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [page, setPage] = useState("Historical");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home defaultViewMode={"Historical"} />} />{" "}
        <Route
          path="/historical"
          element={<Home defaultViewMode={"Historical"} />}
        />
        <Route
          path="/cloud-cover"
          element={<Home defaultViewMode={"Cloud Cover"} />}
        />
        <Route
          path="/snowtracker"
          element={<Home defaultViewMode={"SnowTracker"} />}
        />
        <Route path="/blog" element={<Home defaultViewMode={"Blog"} />} />
        <Route path="/blog/post/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
