import React from "react";

interface ButtonProps {
  style?: "dark" | "orange";
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="h-14 px-4 py-3 bg-ar-dark-1 hover:bg-ar-dark-2 text-white rounded-xl">
      {text}
    </button>
  );
};

export default Button;
