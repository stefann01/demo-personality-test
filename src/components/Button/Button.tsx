import React from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  buttonClass?: string;
}

export default function Button({
  onClick,
  children,
  buttonClass,
}: ButtonProps) {
  return (
    <button className={`${classes.button} ${buttonClass}`} onClick={onClick}>
      {children}
    </button>
  );
}
