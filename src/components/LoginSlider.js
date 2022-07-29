import React, { useState } from "react";
import "./LoginSlider.css";
import { First, Second, Third, Fourth } from "./FromComponent.js";
import { Spark } from "./Icons";

const LoginSlider = () => {
  const [slide, setSlide] = useState(0);
  const [name, setName] = useState("");
  return (
    <div id="card-container">
      {/* Logo */}
      <div id="logo" className="vhcenter" style={{ marginBottom: "8vh" }}>
        <Spark height={"40px"} width={"40px"} color={"#664de5"} />
        &nbsp;<h2>Eden</h2>
      </div>
      <div className="progressbar" style={{ marginBottom: "8vh" }}>
        <span
          className={"pointer " + (slide >= 0 ? "pointerFull" : "pointerEmpt")}
        >
          1
        </span>
        <span
          className={
            "line  " +
            (slide < 0 ? "lineEmpt" : slide === 0 ? "lineHalf" : "lineFull")
          }
        ></span>
        <span
          className={"pointer " + (slide >= 1 ? "pointerFull" : "pointerEmpt")}
        >
          2
        </span>
        <span
          className={
            "line  " +
            (slide < 1 ? "lineEmpt" : slide === 1 ? "lineHalf" : "lineFull")
          }
        ></span>
        <span
          className={"pointer " + (slide >= 2 ? "pointerFull" : "pointerEmpt")}
        >
          3
        </span>
        <span
          className={
            "line  " +
            (slide < 2 ? "lineEmpt" : slide === 2 ? "lineHalf" : "lineFull")
          }
        ></span>
        <span
          className={"pointer " + (slide >= 3 ? "pointerFull" : "pointerEmpt")}
        >
          4
        </span>
      </div>
      {/*slider from*/}
      <div>
        {slide === 0 && (
          <First
            slide={slide}
            setSlide={setSlide}
            name={name}
            setName={setName}
          />
        )}
        {slide === 1 && <Second slide={slide} setSlide={setSlide} />}
        {slide === 2 && <Third slide={slide} setSlide={setSlide} />}
        {slide === 3 && (
          <Fourth slide={slide} setSlide={setSlide} name={name} />
        )}
      </div>
    </div>
  );
};

export default LoginSlider;
