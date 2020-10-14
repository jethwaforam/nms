import React, { useState, Fragment } from 'react'
import AddNoteForm from '../../component/forms/AddNoteForm'
import EditNoteForm from '../../component/forms/EditNoteForm'
import NoteTable from '../../component/tables/NoteTable'

const Notes = () => {
	// Data
	const notesData = [
		{ id: 1, title: 'Tania', description: 'floppydiskette' },
		{ id: 2, title: 'Craig', description: 'siliconeidolon' },
		{ id: 3, title: 'Ben', description: 'benisphere' },
	]

	const initialFormState = { id: null, title: '', description: '' }

	// Setting state
	const [ notes, setNotes ] = useState(notesData)
	const [ currentNote, setCurrentNote ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addNote = note => {
		note.id = notes.length + 1
		setNotes([ ...notes, note ])
	}

	const deleteNote = id => {
		setEditing(false)

		setNotes(notes.filter(note => note.id !== id))
	}

	const updateNote = (id, updatedNote) => {
		setEditing(false)

		setNotes(notes.map(note => (note.id === id ? updatedNote : note)))
	}

	const editRow = note => {
		setEditing(true)

		setCurrentNote({ id: note.id, title: note.title, description: note.description })
	}
	

	return (
		<div className="col-md-12  m-2">
			<div className="row bg-light border"><h3 className="text-secondary col-md-12">G Notes</h3> </div>
			<div className="row">
				<div className="flex-large">
					<NoteTable notes={notes} editRow={editRow} deleteNote={deleteNote} />
				</div>
				<div className="flex-large">
					{editing ? (
						<Fragment>
							{/* <h2>Edit note</h2> */}
							<EditNoteForm
								editing={editing}
								setEditing={setEditing}
								currentNote={currentNote}
								updateNote={updateNote}
							/>
						</Fragment>
					) : (
						<Fragment>
							
							{/* <h2>Add note</h2> */}
							<AddNoteForm addNote={addNote} />
						</Fragment>
					)}
				</div>
				
			</div>
		</div>
	)
}

export default Notes
