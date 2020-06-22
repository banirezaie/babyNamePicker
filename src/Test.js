import React from "react";
import Click from "./Click";

const Test = () => {
  let weatherData = {
    temperature: 5,
    location: "London",
  };
  const Over = (e) => {
    console.log(e);
  };

  return (
    <div>
      <p>
        The temperature in {weatherData.location} is {weatherData.temperature}
      </p>
      <button onClick={Click}>Click me</button>
      <button onMouseOver={Over}>Hover me</button>
    </div>
  );
};

export default Test;
