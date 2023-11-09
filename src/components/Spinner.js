import { useEffect } from "react";
import "../styles/Spinner.css";
const Spinner = () => {
  useEffect(() => {
    const element = document.getElementById("spinner_container");
  });
  return (
    <>
      <div id="spinner_container">
        <div id="red"></div>
        <div id="green"></div>
        <div id="blue"></div>
      </div>
    </>
  );
};

export default Spinner;
