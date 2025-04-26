import React from "react";

export default function sliderComp({
  setValue,
  handleInput,
  bgColor,
  textColor,
}) {
  const sliderStyle = {
    appearance: "none",
    width: "100%",
    background: !bgColor ? "lightgray" : bgColor,
    cursor: "pointer",
    opacity: 0.2,
    borderRadius: "50%",
  };
  return (
    <div className="d-flex flex-column" style={{ gap: 100 }}>
      <input
        type="range"
        min={5}
        max={100}
        value={setValue}
        onInput={handleInput}
        style={sliderStyle}
      />
      <div
        style={{
          color: !textColor ? "black" : textColor,
          height: `${setValue * 3}px`,
          width: `${setValue * 3}px`,
          background: !bgColor ? "lightgray" : bgColor,
          fontWeight: 500,
          display: "flex",
          justifyContent: "center",
          borderRadius: "50%",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <span style={{ fontSize: `${setValue}px` }}>{setValue}</span>
      </div>
    </div>
  );
}
