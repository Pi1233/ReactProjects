import { useState } from "react";
import SliderComp from "./SliderComp";
import Title from "../../components/Title";
export default function SliderApp() {
  const [slideValue, setSlideValue] = useState(5);

  const handleSliderValueChange = (e) => {
    setSlideValue(e.target.value);
  };

  let bgColor;
  let textColor;

  if (slideValue < 25) {
    bgColor = "red";
    textColor = "white";
  }

  if (slideValue < 25 && slideValue <= 50) {
    bgColor = "blue";
    textColor = "red";
  }

  if (slideValue > 25 && slideValue <= 50) {
    bgColor = "green";
    textColor = "white";
  }

  if (slideValue > 75) {
    bgColor = "orange";
    textColor = "white";
  }

  if (slideValue == 100) {
    bgColor = "red";
  }
  return (
    <div className="container text-center">
      <Title text={"Slide to grow"} />
      <SliderComp
        setValue={slideValue}
        handleInput={handleSliderValueChange}
        bgColor={bgColor}
        textColor={textColor}
      />
    </div>
  );
}
