import React from "react";
import { render } from "@testing-library/react";
import NoteTable from "./NoteTable";

// @ts-ignore
test("renders Select a demo", () => {
   const notes = [
		{ id: 1, title: 'Note 1', description: 'description 1' },
		{ id: 2, title: 'Note 2', description: 'description 2' },
		{ id: 3, title: 'Note 3', description: 'description 3' },
   ];
     const { getByText } = render(
      <NoteTable notes={notes}  />
  );

  // @ts-ignore
  expect(getByText(/Note 1/i)).toBeInTheDocument();
  expect(getByText(/Note 2/i)).toBeInTheDocument();
  expect(getByText(/Note 3/i)).toBeInTheDocument();


});
