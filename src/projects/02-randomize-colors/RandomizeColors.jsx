import React from "react";
import Title from "../../components/Title";

export default function RandomizeColors() {
  function handleclick(event) {
    let body = document.querySelector("body");
    body.style.background = colorchange();
    console.log(event);
    event.target.style.backgroundColor = colorchange();
  }

  function colorchange() {
    let colorhash = "#";
    let fullcolors = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      let smallcolor = fullcolors[Math.floor(Math.random() * 16)];
      colorhash += smallcolor;
    }

    return colorhash;
  }

  return (
    <div className="as">
      <Title text={"Randomize Colors"} classes={"mb-4"} />

      <button
        className="btn btn-success mx-2 my-2"
        onClick={(event) => handleclick(event)}
      >
        click me
      </button>
      <button
        className="btn btn-primary mx-2 my-2"
        onClick={(event) => handleclick(event)}
      >
        Me Too
      </button>
      <button
        className="btn btn-secondary mx-2 my-2"
        onClick={(event) => handleclick(event)}
      >
        Me Three
      </button>
      <button
        className="btn btn-danger mx-2 my-2"
        onClick={(event) => handleclick(event)}
      >
        Don't
      </button>
    </div>
  );
}
