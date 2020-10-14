import React from "react";
import { render } from "@testing-library/react";
import AddNoteForm from "./AddNoteForm";

// @ts-ignore
test("renders Select a demo", () => {
  const { getByText } = render(
      <AddNoteForm />
  );

  // @ts-ignore
  expect(getByText(/Add Note/i)).toBeInTheDocument();
  expect(getByText(/Title/i)).toBeInTheDocument();
  expect(getByText(/Body/i)).toBeInTheDocument();
  expect(getByText(/Save/i)).toBeInTheDocument();
});
