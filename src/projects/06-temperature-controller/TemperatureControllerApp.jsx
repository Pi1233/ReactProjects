import React, { useState } from "react";
import Button from "../../components/button";

export default function TemperatureControllerApp() {
  let [temperature, setTemperature] = useState(0);

  const Tempset = (e) => {
    {
      e.target.outerText == "+"
        ? setTemperature(temperature + 1)
        : setTemperature(temperature - 1);
    }
  };
  return (
    <div className="container text-center mt-3">
      <div className="card bg-light m-auto " style={{ width: 235 }}>
        <h1
          className={`text-light mb-5 ms-2 card rounded-circle ${
            temperature <= 0
              ? "bg-info"
              : temperature >= 10
              ? "bg-danger"
              : "bg-warning"
          }`}
          style={{ height: 150, border: "2px solid #666", fontSize: "160%" }}
        >
          {" "}
          <small
            className={`position-relative position-absolute start-0 top-0 ms-4 mt-4 fs-5 ${
              temperature < 0 ? "text-dark" : "text-light"
            }`}
          >
            Temperature <br /> <div className="fs-1 mt-1">{temperature}° C</div>
          </small>
        </h1>

        <div className="d-flex">
          <Button
            text="-"
            toggle={"button"}
            style={"width:29.5%"}
            btnClass={"btn-lg btn-outline-primary ms-4 me-4"}
            onClick={Tempset}
          />

          <Button
            text="+"
            btnClass={"btn-lg btn-outline-danger"}
            style={"width:31%"}
            onClick={Tempset}
          />
        </div>
      </div>
    </div>
  );
}
