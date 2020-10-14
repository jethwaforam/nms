import React from "react";
import { render } from "@testing-library/react";
import Login from "./Login";

// @ts-ignore
test("renders Select a demo", () => {
  const { getByText } = render(
      <Login />
  );

  // @ts-ignore
  expect(getByText(/Please Login!/i)).toBeInTheDocument();
});
