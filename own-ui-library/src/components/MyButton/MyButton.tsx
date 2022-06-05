import React from "react";
import "./MyButton.css";

export interface MyButtonProps {
  children: React.ReactNode;
  color: string;
  big?: boolean;
}

const MyButton: React.FC<MyButtonProps> = ({
  children,
  color,
  big,
  ...props
}) => {
  const classes = ["my-button"];
  if (big) {
    classes.push("big-button");
  }
  return (
    <button {...props} style={{ color }} className={classes.join(" ")}>
      {children}
    </button>
  );
};

export default MyButton;
