import { MouseEvent, useState } from "react";
import Dots from "../Dots/Dots";
import ArrowIcon from "../Icons/Arrow/ArrowIcon";
import Slide from "./Slide/Slide";
import "./Slider.scss";

export interface SlideItem {
  summary: string;
  fullname: string;
  position: string;
}

const slideItems: SlideItem[] = [
  {
    summary:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    fullname: "John Smith 1",
    position: "Marketing Director at XYZ Corp",
  },
  {
    summary:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    fullname: "John Smith 2",
    position: "Marketing Director at XYZ Corp",
  },
  {
    summary:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    fullname: "John Smith 3",
    position: "Marketing Director at XYZ Corp",
  },
  {
    summary:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    fullname: "John Smith 4",
    position: "Marketing Director at XYZ Corp",
  },
  {
    summary:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    fullname: "John Smith 5",
    position: "Marketing Director at XYZ Corp",
  },
];

const Slider = () => {
  const [active, setActive] = useState<number>(1);
  const handlePrevClick = (e: MouseEvent) => {
    e.preventDefault();
    setActive((prev) => {
      if (prev == 0) {
        return slideItems.length - 1;
      }

      return prev - 1;
    });
  };
  const handleNextClick = (e: MouseEvent) => {
    e.preventDefault();
    setActive((prev) => {
      if (prev == slideItems.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translate(calc(650px * ${-active + 2}))` }}
      >
        {slideItems.map((item, idx) => (
          <Slide key={idx} {...item} />
        ))}
      </div>
      <div className="control">
        <button className="arrow-left" onClick={handlePrevClick}>
          <ArrowIcon simple={"white"} />
        </button>
        <Dots count={slideItems.length} active={active} setActive={setActive} />
        <button onClick={handleNextClick}>
          <ArrowIcon simple={"white"} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
