import React, { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
export default function HiddenSearchBarApp() {
  let body = document.body.style;

  const [uiProps, setUiProps] = useState({
    bg: "purple",
    shadow: "",
    transitions: "all .3s ease",
    opacity: 0.8,
    showSearchIcon: true,
    showSearchBar: false,
    borderBottomColor: "#fff",
  });

  let inputStyle = {
    margin: "10vh 25vw",
    width: "20vh",
    height: "30px",
    padding: "1rem .3rem",
    border: "none",
    outline: "none",
    background: "transparent",
    text: "green",
    borderBottom: `1px solid ${uiProps.borderBottomColor}`,
    fontSize: "1.3rem",
    color: "white",
    boxShadow: "0px 55px 60px -15px rgba(0,0,0,0.75)",
    opacity: uiProps.opacity,
    transitions: "all 4s ease",
  };

  let bsSearchStyle = {
    fontSize: 50,
    cursor: "pointer",
    position: "absolute",
    top: 20,
    right: 20,
    color: "#fff",
  };

  const inputEl = useRef(null);

  useEffect(
    () => {
      body.background = uiProps.bg;
      body.boxShadow = uiProps.shadow;
      body.transition = uiProps.transitions;
      uiProps.showSearchBar && inputEl.current.focus();
    },
    [uiProps.shadow],
    [uiProps.showSearchBar]
  );

  const showSearch = () => {
    setUiProps({
      opacity: 1,
      showSearchIcon: false,
      showSearchBar: true,
    });
    inputEl.current.focus();
  };

  const handleSearchFocus = () => {
    setUiProps({
      shadow: "inset 0 -60vh 50vw 200px rgba(0,0,0,0.6)",
      borderBottomColor: "green",
    });
  };

  const handleSearchBlur = (e) => {
    setUiProps({
      shadow: "none",
      opacity: 0,
      borderBottomColor: "#fff",
      showSearchIcon: true,
    });
  };

  return (
    <div className="container" style={{ height: "100vh" }}>
      {uiProps.showSearchIcon ? (
        <BsSearch style={bsSearchStyle} onClick={showSearch} />
      ) : (
        <input
          type="text"
          placeholder="Search"
          text="white"
          style={inputStyle}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          ref={inputEl}
        />
      )}
    </div>
  );
}
