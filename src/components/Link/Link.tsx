import { FC, HTMLAttributes, PropsWithChildren } from "react";
import ArrowIcon, { ArrowIconProps } from "../Icons/Arrow/ArrowIcon";
import "./Link.scss";
import { VariantProps, cva } from "class-variance-authority";

const link = cva("", {
  variants: {
    type: {
      reverse: "reverse",
    },
    color: {
      white: "white",
      black: "black",
      green: "var(--green)",
    },
  },
});

interface LinkComponent
  extends FC<PropsWithChildren & VariantProps<typeof link>> {
  Arrow: FC<ArrowIconProps>;
  P: FC<HTMLAttributes<HTMLParagraphElement>>;
}

const Link: LinkComponent = ({ children, color, type }) => {
  return (
    <div
      className={"link " + link({ type })}
      style={{ color: link({ color }) }}
    >
      {children}
    </div>
  );
};

Link.Arrow = ({ simple, circled, rotated }) => (
  <ArrowIcon simple={simple} circled={circled} rotated={rotated} />
);
Link.P = (props) => <p {...props}>Learn more</p>;

export default Link;
