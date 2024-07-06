import { FC, PropsWithChildren } from "react";
import ArrowIcon, { ArrowIconProps } from "../Icons/Arrow/ArrowIcon";
import "./Link.scss";
import { VariantProps, cva } from "class-variance-authority";

const link = cva("", {
  variants: {
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
}

const Link: LinkComponent = ({ children, color }) => {
  return (
    <div className="link" style={{ color: color! }}>
      {children}
      <p>Learn more</p>
    </div>
  );
};

Link.Arrow = ({ simple, circled }) => (
  <ArrowIcon simple={simple} circled={circled} />
);

export default Link;
