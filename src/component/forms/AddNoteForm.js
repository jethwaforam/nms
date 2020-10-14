import React, { useState } from 'react'


const AddNoteForm = props => {
	const initialFormState = { id: null, title: '', description: '' }
	const [ note, setNote ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setNote({ ...note, [name]: value })
	}
	const newNote = () => {
		setNote(initialFormState)
	}

	return (
		<div className="col-md-12  " >
		  <div className=" row-md-6  float-right ">
        	<button onClick={newNote}  className="btn btn-outline-secondary ">+ Add Note</button>
			</div>
			<div className=" pt-10 row-md-6  ">
				<form
				onSubmit={event => {
					event.preventDefault()
					if (!note.title || !note.description) return

					props.addNote(note)
					setNote(initialFormState)
				}}
				>
				<label>Title</label>
				<input type="text"  required name="title" value={note.title} onChange={handleInputChange} />
				<label>Body</label>
				<textarea rows="10"  required type="text" name="description" value={note.description} onChange={handleInputChange} />
				<button className="col-md-3 btn btn-primary float-right">Save</button>
			</form>
		</div>
		</div>
	)
}

export default AddNoteForm
