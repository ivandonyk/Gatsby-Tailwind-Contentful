import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

// TODO: ADD CORRECT TYPES
interface CompanyLogosProps {
  companyLogoHeading: string;
  companyLogos: any;
}

const CompanyLogos: React.FC<CompanyLogosProps> = ({
  companyLogoHeading,
  companyLogos,
}) => {
  return (
    <>
      <h3 className="text-white text-3xl text-center py-6">
        {/* TODO: need better way to identify words in evidence, here is taking by index */}
        {companyLogoHeading.split(" ").map((word, i) => {
          if (i === 1 || i === 5)
            return <span className="text-ar-orange">{word} </span>;
          else return `${word} `;
        })}
      </h3>
      <div className="flex justify-around">
        {companyLogos.map((logo) => (
          <GatsbyImage
            image={logo.gatsbyImageData}
            alt={logo.title}
            imgStyle={{ objectFit: "contain" }}
          />
        ))}
      </div>
    </>
  );
};

export default CompanyLogos;
