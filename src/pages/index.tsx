import React from "react";
import { PageProps } from "gatsby";

import Header from "../components/HomepageHeader";

export const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <main className="bg-ar-dark h-screen">
      <section className="container mx-auto text-white pt-32 px-4">
        <Header />
      </section>
    </main>
  );
};

export default IndexPage;
