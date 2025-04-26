import React from "react";

export default function Contact({
  contact,
  width = 300,
  cardColor = "bg-danger",
  textColor,
}) {
  return (
    <div className={`card `} style={{ width: width, border: "none" }}>
      <div className={`card-header ${cardColor} text-white `}>
        {contact.name}
      </div>
      <div
        className={`card-body text-left bg-info fs-8 `}
        style={{ textAlign: "left" }}
      >
        <h4 className="card-text" style={{ fontSize: "0.9em" }}>
          <span className={`fw-bold ${textColor}`}>Company name:</span>{" "}
          {contact.company.name}
        </h4>
        <p className="card-text">
          <span className={`fw-bold ${textColor}`}>Email:</span> {contact.email}
        </p>
        <p className="card-text">
          <span className={`fw-bold ${textColor}`}>Phone:</span> {contact.phone}
        </p>
        <p className="card-text">
          <span className={`fw-bold ${textColor}`}>User name:</span>{" "}
          {contact.username}
        </p>
      </div>
    </div>
  );
}
