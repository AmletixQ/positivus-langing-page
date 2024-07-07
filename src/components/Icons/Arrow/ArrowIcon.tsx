import { VariantProps, cva } from "class-variance-authority";
import { FC } from "react";
import "./ArrowIcon.scss";

const arrowIcon = cva("", {
  variants: {
    circled: {
      white: "white",
      black: "black",
      green: "var(--green)",
    },
    simple: {
      white: "white",
      black: "black",
      green: "var(--green)",
    },
  },
});

export interface ArrowIconProps extends VariantProps<typeof arrowIcon> {
  className?: string;
}
const ArrowIcon: FC<ArrowIconProps> = ({ simple, circled, className }) => {
  return (
    <div className={"svg-container " + arrowIcon({ circled })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807613 11.9792 0.807613 11.3934 1.3934C10.8076 1.97919 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM2 13.5L22 13.5L22 10.5L2 10.5L2 13.5Z"
          fill={arrowIcon({ simple })}
        />
      </svg>
    </div>
  );
};

export default ArrowIcon;
