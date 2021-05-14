import React from "react";

import Button from "../components/Button";

export default {
  title: "Buttons",
};

export const DarkButton: React.VFC<{}> = () => (
  <Button type="dark" text="Dark Button" />
);
export const OrangeButton: React.VFC<{}> = () => (
  <Button type="orange" text="Orange Button" />
);
