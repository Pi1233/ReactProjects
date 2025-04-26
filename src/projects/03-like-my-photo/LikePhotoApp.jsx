import React from "react";
import Title from "../../components/Title";
import { FaRegSmileBeam } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import DogyDog from "../03-like-my-photo/img/pexels-pixabay-257540.jpg";
import { useState } from "react";

export default function LikePhotoApp() {
  const [like, setcolor] = useState(false);
  let [count, setcount] = useState(0);

  let togglelike = () => {
    if (!like) {
      setcolor(true);
      setcount((count += 1));
    } else {
      setcolor(false);
      setcount((count -= 1));
    }
  };

  return (
    <div className="container text-center">
      <Title text={"Like Photo App"} />
      <Title classes="subtitle" text={`likes ${count}`} />

      <div className="card m-auto border-0" style={{ width: 350 }}>
        <div className="card-header bg-dark fs-xl text-white ">
          <FaRegSmileBeam className="me-2" />
          DogyDog
        </div>
        <img
          src={DogyDog}
          onDoubleClick={togglelike}
          alt="img"
          style={{ cursor: "pointer", height: "fit-content" }}
        />

        <div
          className="card-footer fs-xl bg-dark text-white d-flex "
          style={{ justifyContent: "space-between" }}
        >
          <FaRegComment />
          {like ? (
            <FaHeart className="icon fs-xl text-danger" onClick={togglelike} />
          ) : (
            <FaHeart className="icon" onClick={togglelike} />
          )}
        </div>
      </div>
    </div>
  );
}
