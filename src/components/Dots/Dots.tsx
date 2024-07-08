import { Dispatch, FC, SetStateAction } from "react";
import Dot from "./Dot/Dot";
import "./Dots.scss";

interface DotsProps {
  count: number;
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}

const Dots: FC<DotsProps> = ({ count, active, setActive }) => {
  return (
    <div className="dots">
      {[...Array(count)].map((_, idx) => (
        <Dot id={idx} key={idx} active={idx == active} setActive={setActive} />
      ))}
    </div>
  );
};

export default Dots;
