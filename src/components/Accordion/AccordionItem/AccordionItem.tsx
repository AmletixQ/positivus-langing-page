import { FC, MouseEvent, useState } from "react";
import PlusIcon from "../../Icons/Plus/PlusIcon";
import MinusIcon from "../../Icons/Minus/MinusIcon";
import "./AccordionItem.scss";

export interface AccordionItemProps {
  order: number;
  title: string;
  summary: string;
  status: boolean;
}

const AccordionItem: FC<AccordionItemProps> = ({
  order,
  title,
  summary,
  status,
}) => {
  const [active, setActive] = useState<boolean>(status);
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <div className={"accordionitem " + (active ? "active" : "")}>
      <div className="container">
        <div className="content">
          <h1>{"0" + order.toString()}</h1>
          <h3>{title}</h3>
        </div>
        <button onClick={handleClick}>
          {!active ? <PlusIcon /> : <MinusIcon />}
        </button>
      </div>
      <hr />
      <p>{summary}</p>
    </div>
  );
};

export default AccordionItem;
