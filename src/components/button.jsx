import React from "react";

export default function Button({
  text = "click",
  btnClass,
  icon,
  onClick,
  style,
  toggle,
}) {
  return (
    <button
      className={`btn ${btnClass}`}
      style={style}
      onClick={onClick}
      data-toggle={`${toggle}`}
    >
      {icon}
      {text}
    </button>
  );
}
