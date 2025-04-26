import React from "react";
import "./LockSlider.css";
export default function LockSlider({ handleInput, sliderValue, width }) {
  let sliderStyle = {
    appearance: "none",
    width: !width ? "300px" : width,
    height: "50px",
    margin: "0% 10%",
    background: "rgba(255, 255, 255, 0.5)",
    borderRadius: "20px",
  };
  return (
    <input
      type="range"
      className="slider mb-2 border-5"
      style={sliderStyle}
      value={sliderValue}
      onInput={handleInput}
    />
  );
}
