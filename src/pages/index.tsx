import React from "react";
import { PageProps } from "gatsby";

import HomepageHeader from "../components/HomepageHeader";
import Navbar from "../components/Navbar";

import Connections1 from "../images/connections-1.svg"; // todo: fix this,it works but typescript doesn't like it

export const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <main className="bg-ar-dark h-screen">
      <section className="container mx-auto text-white px-4">
        <Navbar />
        <HomepageHeader />
        <div className="relative ">
          <img src={Connections1} className="w-full" />
          <div className="absolute top-0 w-11/12 md:pt-8 lg:pt-12 xl:pt-16 2xl:pt-24  connection-1-texts">
            <div className="flex justify-center">
              <div className="w-1/4 text-center">
                <div className="text-ar-picton-blue uppercase text-xs">
                  KEYWORDS TRACKED
                </div>
                <div className="lg:text-2xl">12,568,100</div>
              </div>
              <div className="w-1/4 text-center">
                <div className="text-ar-turquoise uppercase text-xs">
                  Keyword database
                </div>
                <div className="lg:text-2xl">14,560,156,563</div>
              </div>
              <div className="w-1/4 text-center">
                <div className="text-ar-mantis uppercase text-xs">
                  Pixels tracked
                </div>
                <div className="lg:text-2xl">29,568,159,548</div>
              </div>
              <div className="w-1/4 text-center">
                <div className="text-ar-wattle uppercase text-xs">
                  Data processed
                </div>
                <div className="lg:text-2xl">568,569 TB</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;
