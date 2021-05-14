import React from "react";
import { PageProps } from "gatsby";
import { graphql } from "gatsby";

import HomepageHeader from "../components/HomepageHeader";
import Navbar from "../components/Navbar";

import Connections1 from "../images/connections-1.svg"; // todo: fix this,it works but typescript doesn't like it

export const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <main className="bg-ar-dark">
      <section className="container mx-auto text-white px-4">
        <Navbar />
        <HomepageHeader />
        <div className="relative ">
          <img src={Connections1} className="w-full" />
          <div className="absolute top-0 w-11/12 md:pt-8 lg:pt-12 xl:pt-16 2xl:pt-24  connection-1-texts">
            <div className="flex justify-center">
              <div className="w-1/4">
                <ConnectionItem
                  color="picton-blue"
                  text="KEYWORDS TRACKED"
                  number="12,568,100"
                />
              </div>
              <div className="w-1/4">
                <ConnectionItem
                  color="turquoise"
                  text="Keyword database"
                  number="14,560,156,563"
                />
              </div>
              <div className="w-1/4">
                <ConnectionItem
                  color="mantis"
                  text="Pixels tracked"
                  number="29,568,159,548"
                />
              </div>
              <div className="w-1/4">
                <ConnectionItem
                  color="wattle"
                  text="Data processed"
                  number="568,569 TB"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

type ConnectionItemProps = {
  color: "picton-blue" | "turquoise" | "mantis" | "wattle";
  text: string;
  number: string;
};
const ConnectionItem = ({ color, text, number }: ConnectionItemProps) => {
  return (
    <div className="text-center">
      <div className={`text-ar-${color} uppercase text-xs`}>{text}</div>
      <div className="lg:text-2xl">{number}</div>
    </div>
  );
};

export const query = graphql`
  {
    contentfulHomePage {
      header {
        title
        subitle
      }
      connectionItems {
        id
        number
        text
      }
    }
  }
`;

export default IndexPage;
