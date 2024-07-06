import {
  FC,
  HTMLAttributes,
  ImgHTMLAttributes,
  PropsWithChildren,
} from "react";
import "./Card.scss";

interface CardComponent extends FC<PropsWithChildren & { className?: string }> {
  Content: FC<HTMLAttributes<HTMLDivElement>>;
  Title: FC<HTMLAttributes<HTMLHeadingElement>>;
  Illustration: FC<ImgHTMLAttributes<HTMLImageElement>>;
}

const Card: CardComponent = ({ children, className }) => {
  return <div className={"card " + className}>{children}</div>;
};

Card.Content = (props) => <div className="card-content" {...props} />;
Card.Title = (props) => props.children;
Card.Illustration = (props) => <img {...props} />;

export default Card;
