import React from "react";
import Title from "../../components/Title";
import { useState } from "react";

export default function EsignatureApp() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("Select Date");

  const inputstyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: "0.4rem 0.4rem",
    display: "flex",
    position: "relative",
    margin: "1rem 13rem",
    width: "11rem",
  };

  const changetitle = (e) => {
    setName(e.target.value);
  };

  const changedate = (e) => {
    setDate(e.target.value);
  };

  document.body.style.background = "#ddd";

  return (
    <div className="container text-center">
      <Title classes={"main-title"} text={name} />
      <Title classes={"title"} text={!date ? "DOB" : date} />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis debitis
        asperiores provident maxime, unde laudantium ex ipsam velit sequi
        ratione deserunt corrupti, modi inventore fuga, doloremque quod incidunt
        perspiciatis! Quia? Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Magnam, libero aut? Fugiat architecto enim vero non facere
        recusandae asperiores optio tenetur dolorem dolor fuga, quia, pariatur,
        sequi totam soluta sitatis veniam earum vero iure deserunt, v
      </p>

      <footer
        className="d-flex"
        style={{
          justifycontent: "space-around",
          position: "relative",
          top: "20vh",
        }}
      >
        <h5>
          Type date
          <input
            type="date"
            value={date}
            style={inputstyle}
            onChange={changedate}
          />
        </h5>
        <h5>
          Type name
          <input
            type="text"
            value={name}
            placeholder="Your signature"
            style={inputstyle}
            onChange={changetitle}
          />
        </h5>
      </footer>
    </div>
  );
}
