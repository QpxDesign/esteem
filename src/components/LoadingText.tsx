import React, { useEffect, useState } from "react";

export default function LoadingText() {
  const [dots, setDots]: any = useState(".");
  useEffect(() => {
    var dots_local = ".";
    const interval = setInterval(() => {
      if (dots_local.length === 3) {
        setDots(".");
        dots_local = ".";
      } else if (dots_local.length === 2) {
        setDots("...");
        dots_local = "...";
      } else if (dots_local.length === 1) {
        setDots("..");
        dots_local = "..";
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <h1>Loading{dots}</h1>;
}
