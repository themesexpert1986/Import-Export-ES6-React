import React from "react";
import ReactDOM from "react-dom";
// import {add,multiply,subtract,divide} from "./calculator";
import * as caculator from "./calculator";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{caculator.add(1, 2)}</li>
    <li>{caculator.multiply(2, 3)}</li>
    <li>{caculator.subtract(7, 2)}</li>
    <li>{caculator.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
