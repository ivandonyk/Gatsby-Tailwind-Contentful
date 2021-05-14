import React from "react";
import BookDemo from "./BookDemo";
import { ContentfulHomePageHeaderJsonNode } from "../../graphql-types";

interface headerProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<headerProps> = ({ title, subtitle }) => {
  const titleWithStyle = title.split(" ").map((str, i) => {
    if (i === 1) return <span className="text-ar-fountain-blue">{str} </span>;
    else return `${str} `;
  });
  return (
    <div className="">
      <div className="text-5xl pt-16 font-semibold text-center">
        {titleWithStyle.map((str) => str)}
      </div>
      <div className="text-3xl font-light text-center pt-4">{subtitle}</div>
      <div className="pt-10 md:w-1/2 mx-auto">
        <BookDemo />
      </div>
    </div>
  );
};

export default Header;
