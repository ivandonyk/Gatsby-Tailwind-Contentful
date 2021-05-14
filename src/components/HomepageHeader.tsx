import React from "react";
import BookDemo from "./BookDemo";

interface headerProps {}

const Header: React.FC<headerProps> = ({}) => {
  return (
    <div className="">
      <div className="text-5xl pt-16 font-semibold text-center">
        SERP <span className="text-ar-fountain-blue">Analytics</span> For Search
        Professionals
      </div>
      <div className="text-3xl font-light text-center pt-4">
        Accurate position and SERP analytics
      </div>
      <div className="pt-10 md:w-1/2 mx-auto">
        <BookDemo />
      </div>
    </div>
  );
};

export default Header;
