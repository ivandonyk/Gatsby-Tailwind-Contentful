import React from "react";

interface ButtonProps {
  type?: "dark" | "orange";
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, type = "dark" }) => {
  const typeStyles: Record<ButtonProps["type"], string> = {
    dark: "bg-ar-dark-1 hover:bg-ar-dark-2",
    orange: "bg-ar-orange hover:bg-ar-orange-dark",
  };
  return (
    <button
      className={`h-14 px-4 py-3 text-white rounded-xl ${typeStyles[type]}`}
    >
      {text}
    </button>
  );
};

export default Button;
