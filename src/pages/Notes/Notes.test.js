import React from "react";
import { render } from "@testing-library/react";
import Notes from "./Notes";

// @ts-ignore
test("renders Select a demo", () => {
  const { getByText } = render(
      <Notes />
  );

  // @ts-ignore
  expect(getByText(/G Notes/i)).toBeInTheDocument();
});
