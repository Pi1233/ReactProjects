import Button from "../components/button";
import React from "react";

export default function Popup({
  trigger,
  type,
  text,
  title,
  onClick,
  handleonClick,
}) {
  const popupContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const popupstyle = {
    // position: "relative",
    // margin: "20% auto",
    // zIndex: "1",
    width: "40em",
  };

  const popupclosebutton = {
    position: "absolute",
    top: 0,
    right: 0,
    marginRight: "1em",
    marginTop: "0.3em",
    width: "2.5em",
  };

  return (
    trigger && (
      <div style={popupContainer}>
        <div style={popupstyle}>
          <div className={`alert ${type}`}>
            <h4 className="mb-1">{title && title}</h4>
            <p>{text && text}</p>
            <Button
              btnClass={"btn-outline-danger"}
              text={"x"}
              style={popupclosebutton}
              onClick={() => handleonClick(false)}
            />
          </div>
        </div>
      </div>
    )
  );
}
