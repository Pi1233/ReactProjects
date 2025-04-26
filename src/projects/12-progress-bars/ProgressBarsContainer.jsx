import React, { useRef, useEffect, useState } from "react";
import Title from "../../components/Title";
import { Progressbar } from "../../components/Progressbar";

export default function ProgressBarsContainer() {
  const [completed, setCompleted] = useState(50);
  const [status, setstatus] = useState({
    ui: 55,
    ux: 33,
    data: 20,
  });

  const projectDate = [
    { bgColor: "red", completed: status.ui },
    { bgColor: "blue", completed: status.ux },
    { bgColor: "grey", completed: status.data },
  ];
  const InputStyle = {
    border: "none",
    borderBottom: "1px solid lightgray",
    width: 50,
    outline: "none",
    textAlign: "center",
  };

  const UiInput = useRef(null);

  useEffect(() => {
    UiInput.current.focus();
    setInterval(() => setCompleted(Math.floor(Math.random() * 100)), 2000);
  }, []);

  return (
    <div className="container">
      <Title text={"Progress bars"} />
      <h2>Project status</h2>
      <ul style={{ listStyleType: "none" }}>
        <li>
          UI Status{" "}
          <input
            type="number"
            value={status.ui}
            onChange={(e) => setstatus({ ...status, ui: e.target.value })}
            ref={UiInput}
            style={InputStyle}
          />
        </li>

        <li>
          UX Status{" "}
          <input
            type="number"
            value={status.ux}
            onChange={(e) => setstatus({ ...status, ux: e.target.value })}
            style={InputStyle}
          />
        </li>

        <li>
          DATA Status{" "}
          <input
            type="number"
            value={status.data}
            onChange={(e) => setstatus({ ...status, data: e.target.value })}
            style={InputStyle}
          />
        </li>
      </ul>
      {projectDate.map((date, idx) => (
        <Progressbar
          key={idx}
          bgColor={date.bgColor}
          completed={date.completed}
        />
      ))}

      <Progressbar
        bgColor={completed > 50 ? "blue" : "green"}
        completed={completed}
      />
    </div>
  );
}
