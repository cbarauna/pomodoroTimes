import React from "react";

const Button = () => ({ id, onClick, icon }: any) => {
  return (
    <button id={id} onClick={onClick}>
      {icon}
    </button>
  );
};

export default Button;
