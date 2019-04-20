import React from "react";
import ReactDOM from "react-dom";

import Clock from "./clock";
import Weather from "./weather";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  ReactDOM.render(<Root />, main)
});

const Root = props => {
  return (
  <div>
    <Clock />
    <Weather />
  </div>
  );
}
