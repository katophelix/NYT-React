import React from "react";
import "./Button.css";

// Destructuring the type, className, children and onClick props, applying them to the button element
const Button = ({ className, children, onClick }) => (
  <button
    onClick={onClick}
    className="button"
  >
    {children}
  </button>
);


export default Button;
