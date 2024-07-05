import { VariantProps, cva } from "class-variance-authority";
import "./Button.scss";
import { ButtonHTMLAttributes, FC } from "react";

const button = cva("button", {
  variants: {
    intent: {
      primary: "primary",
      secondary: "secondary",
      tertiary: "tertiary",
    },
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}
const Button: FC<ButtonProps> = ({ intent, className, ...props }) => {
  return <button className={button({ intent, className })} {...props} />;
};

export default Button;
