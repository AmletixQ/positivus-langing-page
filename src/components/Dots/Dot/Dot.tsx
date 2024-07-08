import { Dispatch, FC, MouseEvent, SetStateAction } from "react";
import Star from "../../Icons/Star/Star";
import "./Dot.scss";

interface DotProps {
  id: number;
  active: boolean;
  setActive: Dispatch<SetStateAction<number>>;
}

const Dot: FC<DotProps> = ({ id, active, setActive }) => {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setActive(id);
  };
  return (
    <button className="star" onClick={handleClick}>
      <Star color={active ? "var(--green)" : "white"} />
    </button>
  );
};

export default Dot;
