import React, { useState, useEffect } from "react";
import Button from "./button";

export default function Alert({ type, message, delay, delaytime = 4000 }) {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = (e) => {
    setTimeout(() => {
      e.target.parentElement.parentElement.classList.add("fade");
    }, 2000);

    setTimeout(() => {
      setShowAlert(false);
    }, delaytime);
  };

  useEffect(() => {
    setTimeout(() => {
      e.target.parentElement.parentElement.classList.add("fade");
    }, 1000);

    delay &&
      setTimeout(() => {
        setShowAlert(false);
      }, 4000);
  });

  return (
    showAlert && (
      <div
        className={`alert alert-${type} fs-5`}
        style={{ height: "100px", width: "40%" }}
      >
        <div className="alert-close">
          <span className="pe-5 me-5">{message}</span>
          <Button
            btnClass={
              "btn-close text-left position-relative position-absolute top-13 end-0 fs-2 mt-2 me-3 "
            }
            text={""}
            onClick={closeAlert}
          />
        </div>
      </div>
    )
  );
}
