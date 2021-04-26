import React from "react";
import "./Button.css";

function Button({ children, onClick, name }) {
  return (
    <div className="btn-container">
      <div className="btn" onClick={onClick}>
        {name}
      </div>
      ;
    </div>
  );
}

export default Button;
