import React from "react";
import "./MyInput.css";
export interface MyInputProps {
    type: string;
    label: string;
    placeholder: string;
    big?: boolean;
}
declare const MyInput: React.FC<MyInputProps>;
export default MyInput;
