import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// @ts-ignore
test("renders Select a demo", () => {
  const { getByText } = render(
      <App />
  );

  // @ts-ignore
  expect(getByText(/Please Login!/i)).toBeInTheDocument();
  // @ts-ignore
  //expect(getByText(/Drop-in/i)).toBeInTheDocument();
  // @ts-ignore
  //expect(getByText(/Dotpay/i)).toBeInTheDocument();
});
