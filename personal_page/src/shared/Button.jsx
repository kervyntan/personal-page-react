import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.onClickHandler}
    >
      {props.text}
    </button>
  );
};

export default Button;
