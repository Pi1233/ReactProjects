import React, { useState, useEffect } from "react";
import Button from "../../components/button";
import { BsFillEmojiFrownFill, BsFillEmojiSmileFill } from "react-icons/bs";
import "./Bounce.css";

export default function DialogBox() {
  const [subscription, setsubscription] = useState({
    Title: "Hello",
    description: "Would you like to subscribe?",
    state: null,
    justifyContent: "space-between",
  });

  const handleSubscribe = () => {
    setsubscription({
      Title: "Thank You",
      description: "for your subscription",
      state: "subscribed",
      justifyContent: "flex-end",
    });
  };

  useEffect(() => {
    if (subscription.state === "subscribed") {
      setIcon(<BsFillEmojiSmileFill style={iconStyle} />);
      document.body.style.background = "rgba(115, 227, 23, 0.2)";
    }
    if (subscription.state === "unsubscribed") {
      setIcon(<BsFillEmojiFrownFill style={iconStyle} />);
      document.body.style.background = "rgba(29, 125, 229, 0.2)";
    }
  }, [subscription.state]);

  const handleUnsubscribe = () => {
    setsubscription({
      Title: "Sorry",
      description: "to see you go",
      state: "unsubscribed",
      justifyContent: "flex-end",
    });
  };

  const [icon, setIcon] = useState();
  let iconStyle = {
    fontSize: "80px",
    marginLeft: "0.3em",
    justifySelf: "center",
    color:
      subscription.state === "subscribed"
        ? "rgba(59,137,90,0.4)"
        : "rgba(233, 110, 16, 0.4)",
  };

  const [bounce, setBounce] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setBounce("");
    }, 500);
    return () => setBounce("bounce");
  }, [subscription.state]);

  return (
    <div
      style={{ width: "31em" }}
      className={`card m-auto bg-light shadow ${bounce}`}
    >
      <div className="card-body">
        <div
          className="d-grid"
          style={{
            gridTemplateColumns: "2fr 1fr",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <section>
            <div>
              <h2 className="card-title text-start">{subscription.Title}</h2>
            </div>
            <h5 className="card-text text-start">{subscription.description}</h5>
          </section>
          <div>{icon}</div>
        </div>
      </div>

      <div
        className="d-flex mb-2 px-1 m-auto"
        style={{
          width: "100%",
          justifyContent: `${subscription.justifyContent}`,
        }}
      >
        {subscription.state === null && (
          <Button text={"Cancel"} btnClass={"btn-outline-dark m-2"}></Button>
        )}
        {subscription.state === "subscribed" ? null : (
          <Button
            text={"Subscribe"}
            btnClass={"btn-outline-danger m-2"}
            onClick={handleSubscribe}
            style={{ width: "7.2em" }}
          ></Button>
        )}
        {subscription.state === "subscribed" ? (
          <Button
            text={"Unsubscribe"}
            btnClass={"btn-outline-danger m-2"}
            onClick={handleUnsubscribe}
            style={{ width: "7.2em" }}
          ></Button>
        ) : null}
      </div>
    </div>
  );
}
