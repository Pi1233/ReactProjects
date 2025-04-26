import React, { useState } from "react";
import LockSlider from "./LockSlider";
import { AiFillUnlock } from "react-icons/ai";
import LockScreenImg from "./img/moon.jpg";
import HomeScreenImg from "./img/home.jpg";

export default function SlideToUnlock() {
  const [uiProps, setUiProps] = useState({
    uiText: "Unlock Screen",
    uiColor: "#eee",
    uiBg: `url(${LockScreenImg}) center/cover no-repeat`,
  });
  const [showLockSlider, setShowLockSlider] = useState(true);
  const [lockSliderValue, setlockSliderValue] = useState(0);
  const handleLockSliderInput = (e) => {
    setlockSliderValue(e.target.value);
    setShowLockSlider(false);
  };
  return (
    <div
      className="container text-center d-flex flex-column "
      style={{
        height: "80vh",
        marginTop: "2vh",
        width: 340,
        border: "4px solid #000",
        borderRadius: 30,
        background: uiProps.uiBg,
        boxShadow: "15px 15px 50px",
      }}
    >
      <h1
        className="title"
        style={{ marginTop: "60%", color: uiProps.uiColor }}
      >
        {uiProps.uiText}
      </h1>
      {showLockSlider ? (
        <LockSlider
          width={"250px"}
          handleInput={handleLockSliderInput}
          value={lockSliderValue}
        />
      ) : (
        <AiFillUnlock
          className="text-center unlockIcon bg-dark "
          style={{ marginTop: "5%", position: "relative", right: "-37%" }}
        />
      )}
    </div>
  );
}
