import React from "react";
import { render } from "@testing-library/react";
import EditNoteForm from "./EditNoteForm";

// @ts-ignore
test("renders Select a demo", () => {
     let currentNote={ id: 1, title: 'Test Note', description: 'Test Note' };
  const { getByText } = render(
      <EditNoteForm editing={true}
      setEditing={true}
      currentNote={currentNote}
     />
  );

  // @ts-ignore
  expect(getByText(/Add Note/i)).toBeInTheDocument();
  expect(getByText(/Title/i)).toBeInTheDocument();
  expect(getByText(/Body/i)).toBeInTheDocument();
  expect(getByText(/Save/i)).toBeInTheDocument();


});
