import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [answer, setAnswer] = useState("");

  function isleap(year) {
    if (year % 4 === 0) return "yes";
    return "no";
  }

  function leapYearChecker(event) {
    var year = event.target.value;
    var result = isleap(year);
    if (result === "yes") {
      setAnswer("leap year");
    } else {
      setAnswer("not a leap year");
    }
  }
  return (
    <div className="App">
      <h1>Leap Year Checker</h1>
      <input placeholder="Enter year"></input>
      <button onClick={leapYearChecker}>Check</button>
      <div> {answer} </div>
    </div>
  );
}
