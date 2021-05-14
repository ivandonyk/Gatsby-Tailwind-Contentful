import React from "react";
import { PageProps } from "gatsby";
import { graphql } from "gatsby";

import HomepageHeader from "../components/HomepageHeader";
import Navbar from "../components/Navbar";
import { ContentfulHomePage } from "../../graphql-types";

import Connections1 from "../images/connections-1.svg"; // todo: fix this,it works but typescript doesn't like it

type ContentfulHomePageProps = {
  contentfulHomePage: ContentfulHomePage;
};

type IndexPageProps = {
  data: ContentfulHomePageProps;
} & PageProps;

export const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const header = data.contentfulHomePage.header;
  const colors = ["picton-blue", "turquoise", "mantis", "wattle"];

  return (
    <main className="bg-ar-dark">
      <section className="container mx-auto text-white px-4">
        <Navbar />
        <HomepageHeader title={header.title} subtitle={header.subitle} />
        <div className="relative ">
          <img src={Connections1} className="w-full" />
          <div className="absolute top-0 w-11/12 md:pt-8 lg:pt-12 xl:pt-16 2xl:pt-24  connection-1-texts">
            <div className="flex justify-center">
              {data.contentfulHomePage.connectionItems.map((item, i) => (
                <div className="w-1/4">
                  <ConnectionItem
                    color={colors[i]}
                    text={item.text}
                    number={item.number}
                    key={item.id}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

type ConnectionItemProps = {
  color: string;
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
