import { FC } from "react";
import { SlideItem } from "../Slider";
import "./Slide.scss";

const Slide: FC<SlideItem> = ({ summary, fullname, position }) => {
  return (
    <div className="slide">
      <div className="bubble">
        <p>{summary}</p>
        <div className="bubble-point"></div>
      </div>
      <div className="info">
        <h4>{fullname}</h4>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default Slide;
