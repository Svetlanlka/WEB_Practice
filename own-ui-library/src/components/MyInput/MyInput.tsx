import React from "react";
import "./MyInput.css";

export interface MyInputProps {
  type: string;
  label: string;
  placeholder: string;
  big?: boolean;
}

const MyInput: React.FC<MyInputProps> = ({
  type,
  label,
  placeholder,
  big,
  ...props
}) => {
  const classes = ["my-input"];
  if (big) {
    classes.push("big-input");
  }

  return (
    <label>
      {label}
      <input type={type} placeholder={placeholder} className={classes.join(" ")}/>
    </label>
  );
};

export default MyInput;
