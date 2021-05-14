import React from "react";
import { Meta } from "@storybook/react";

import HomepageHeaderComponent from "../components/HomepageHeader";
import BookDemoComponent from "../components/BookDemo";

export default {
  title: "Homepage Header",
} as Meta;

export const HomepageHeader = () => (
  <div className="bg-ar-dark h-screen text-white">
    <HomepageHeaderComponent
      title="The Title from Homepage Header"
      subtitle="The Subtitle from Homepage Header"
    />
  </div>
);

export const BookDemo = () => (
  <div className="bg-ar-dark h-screen text-white p-8">
    <div className="w-1/2 mx-auto">
      <BookDemoComponent />
    </div>
  </div>
);
