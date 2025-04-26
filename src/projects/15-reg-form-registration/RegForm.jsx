import React, { useRef, useEffect, useState } from "react";
import Title from "../../components/Title";
import Button from "../../components/button";
import Alert from "../../components/Alert";

export default function RegForm() {
  let inputName = useRef(null);

  let inputEmail = useRef(null);

  let inputPassword = useRef(null);

  const [valid, setvalid] = useState(false);

  useEffect(() => {
    inputName.current.focus();
  }, []);

  const [values, setValues] = useState({
    user_name: "",
    email: "",
    password: "",
  });

  const [submit, setsubmit] = useState(false);

  const handleNameChange = (e) => {
    setValues({ ...values, user_name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    let value = e.target.value;
    setValues({ ...values, password: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.user_name) {
      inputName.current.focus();
    } else if (!values.email) {
      inputEmail.current.focus();
    } else if (!values.password) {
      inputPassword.current.focus();
    }
    if (values.user_name && values.email && values.password) {
      setvalid(true);
    }
    setsubmit(true);
  };
  return (
    <div>
      {submit && valid ? (
        <>
          <Alert
            type={"success"}
            message={"Registration was successful"}
            delay={true}
            delaytime={5000}
          />

          <Title text={"Welcome"} />
        </>
      ) : (
        <div
          className="container m-auto mt-4 p-2 shadow-lg border border-primary rounded"
          style={{ width: "60em" }}
        >
          <Title text={"Registration"}></Title>
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-3 mb-3">
              <input
                type="text"
                placeholder="Enter your name"
                style={{
                  width: "100%",
                  textAlign: "center",
                  borderRadius: "7px",
                  borderColor: "wheat",
                }}
                ref={inputName}
                value={values.user_name}
                onChange={handleNameChange}
              />
              {submit && !values.user_name ? (
                <label className="text-danger fs-sm">
                  Please enter your name
                </label>
              ) : null}
            </div>{" "}
            <div className="form-group mb-3">
              <input
                type="email"
                style={{
                  width: "100%",
                  textAlign: "center",
                  borderRadius: "7px",
                  borderColor: "tomato",
                }}
                placeholder="Enter your email"
                ref={inputEmail}
                onChange={handleEmailChange}
                value={values.email}
              />
              {submit && !values.email ? (
                <label className="text-danger fs-sm">
                  Please enter your email
                </label>
              ) : null}
            </div>{" "}
            <div className="form-group mb-3">
              <input
                type="text"
                placeholder="Enter your password"
                style={{
                  width: "100%",
                  textAlign: "center",
                  borderRadius: "0.4em",
                  borderColor: "violet",
                }}
                ref={inputPassword}
                onChange={handlePasswordChange}
                value={values.password}
              />
              {submit && !values.password ? (
                <label className="text-danger fs-sm">
                  Please enter your password
                </label>
              ) : null}
            </div>
            <Button btnClass={"btn-primary btn-lg"} />
          </form>
        </div>
      )}
    </div>
  );
}
