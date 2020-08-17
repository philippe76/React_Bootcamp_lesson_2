//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let greetings = "";
const current_hour = new Date().getHours();
const custom_style = {
  color: ""
};

if (current_hour < 12) {
  greetings = "Good Morning";
  custom_style.color = "red";
} else if (current_hour < 18) {
  greetings = "Good Afternoon";
  custom_style.color = "green";
} else {
  greetings = "Good Evening";
  custom_style.color = "blue";
}

console.log();

ReactDOM.render(
  <>
    <h1 className="heading" style={custom_style}>
      {greetings}
    </h1>
  </>,
  document.getElementById("root")
);
