import React from "react";

interface ButtonProps {
  btnType: string;
  children: string;
}

const Button = ({ btnType, children }: ButtonProps) => {
  return <button className={btnType}>{children}</button>;
};

export default Button;
