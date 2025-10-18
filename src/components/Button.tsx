import React from "react";

interface ButtonProps {
  isOutlined?: boolean;
  onClick?: () => void;
  children?: string;
}

export default function Button({ isOutlined, onClick, children }: ButtonProps) {
  const baseStyle =
    "px-8 py-4  font-semibold rounded-full shadow-lg shadow-purple/30 transition-all hover:scale-105";

  const outlinedStyle =
    "border border-purple-soft hover:border-purple text-purple-soft hover:text-white";

  const filledStyle = "bg-purple hover:bg-purple-light text-white";

  return (
    <button
      className={`${baseStyle} ${isOutlined ? outlinedStyle : filledStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
