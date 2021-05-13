import React from "react";
import Button from "./Button";

interface BookDemoProps {}

const BookDemo: React.FC<BookDemoProps> = ({}) => {
  return (
    <form className="flex px-2 py-1 bg-white rounded-xl items-center">
      <input
        className="flex-grow rounded-xl text-ar-dark h-16 px-4 py-6"
        placeholder="Enter your Email"
      />
      <Button text="Book Demo" />
    </form>
  );
};

export default BookDemo;
