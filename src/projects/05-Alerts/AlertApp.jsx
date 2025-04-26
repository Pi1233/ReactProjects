import React from "react";
import Alert from "../../components/Alert";

export default function AlertApp() {
  return (
    <div className="container mx-auto">
      <Alert type={"success"} message={"Successful Login"} />
      <Alert
        type={"info"}
        message={"Time Triggered"}
        delay={"true"}
        delaytime={4000}
      />
    </div>
  );
}
