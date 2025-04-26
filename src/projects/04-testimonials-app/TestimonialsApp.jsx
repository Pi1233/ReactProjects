import React, { useState, useEffect } from "react";
import Title from "../../components/Title";
import Button from "../../components/button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

export default function TestimonialsApp() {
  let [testimonials, setTestimonials] = useState("");
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [testimonials]);

  return (
    <div className="container m-auto text-center">
      <Title text={"Testimonials App"} classes={"mb-4"} />
      <Button
        onClick={() => setTestimonials("Posts")}
        text={"Posts"}
        btnClass="btn-info me-2"
        icon={<BsFillFileEarmarkPostFill />}
      />
      <Button
        onClick={() => setTestimonials("Users")}
        text={"Users"}
        btnClass="btn-info me-2"
        icon={<FaUserAlt />}
      />
      <Button
        onClick={() => setTestimonials("Comments")}
        text={"Comments"}
        btnClass="btn-info"
        icon={<BiCommentDetail />}
      />
      <Title
        text={!testimonials ? "Select From Above!" : testimonials}
        classes={"subtitle fs-3 text-primary mt-4 text-xl"}
      />

      {!items
        ? null
        : items.map((item) => {
            return (
              <div className="card card-primary mb-2" key={item.id}>
                {item.name && (
                  <h2 className="card-header text-warning bg-primary">
                    {item.name}
                  </h2>
                )}
                {(item.body || item.title) && (
                  <div className="card-body bg-info">
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </div>
                )}
                {item.email && (
                  <small className="card-header text-light bg-dark">
                    {item.name} Email : {item.email}
                  </small>
                )}
              </div>
            );
          })}
    </div>
  );
}
