import React, { useContext } from "react";
import Title from "../../components/Title";
import Button from "../../components/button";
import { ThemeContext } from "./context/theme-context";

export default function Blog() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className="container">
      <Title text={`My Blog with ${theme} Theme`} classes={"mb-5"} />
      <span style={{ position: "absolute", top: 10, right: 10 }}>
        <Button
          text={theme === "dark" ? "Light" : "Dark"}
          onClick={changeTheme}
          btnClass={`${theme === "dark" ? "btn-light" : "btn-dark"} btn-sm`}
        ></Button>
      </span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro explicabo
        in modi consectetur corporis accusantium dolor ipsa deleniti distinctio,
        est praesentium quis doloribus nam error earum dolorem libero fugiat
        ducimus!
      </p>
    </div>
  );
}
