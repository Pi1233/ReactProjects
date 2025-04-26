import React, { useState, useEffect } from "react";
import Popup from "../../components/popup.component";
import Button from "../../components/button";
import Title from "../../components/Title";

export default function PopupApp() {
  const [trigger, settrigger] = useState(false);

  const [timetrigger, settimetrigger] = useState(false);

  const triggerPopup = () => {
    settrigger(true);
  };

  useEffect(() => {
    setTimeout(() => {
      settimetrigger(true);
    }, 3000);
  }, []);

  return (
    <div>
      <Title text={"Click for popup, or wait 3 seconds"} />
      <Button
        btnClass={"btn-outline-primary mb-5 mt-4"}
        onClick={triggerPopup}
      />

      <Popup
        type={"alert-info"}
        title={"Triggered Popup"}
        text={"This popup is triggered by button"}
        handleonClick={settrigger}
        trigger={trigger}
      />

      <Popup
        type={"alert-danger"}
        title={"Time Triggered Popup"}
        text={"This popup is triggered by delay"}
        handleonClick={settimetrigger}
        trigger={timetrigger}
      />
    </div>
  );
}
