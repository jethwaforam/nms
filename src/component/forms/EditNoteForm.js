import React, { useState, useEffect } from 'react'

const EditNoteForm = props => {
  const initialFormState = { id: null, title: '', description: '' }
  const [ note, setNote ] = useState(props.currentNote)

  useEffect(
    () => {
      setNote(props.currentNote)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setNote({ ...note, [name]: value })
  }
  const newNote = () => {
		setNote(initialFormState)
	}

  return (
    
    <div className="col-md-12  " >
      <div className=" row-md-12 float-right ">
        <button onClick={() => props.setEditing(false)}  className="btn btn-outline-secondary ">+ Add Note</button>
      </div>
      <div className="row-md-12 ">
      <form
      onSubmit={event => {
        event.preventDefault()

        props.updateNote(note.id, note)
      }}
    >
      <label>Title</label>
      <input type="text"  required name="title" value={note.title} onChange={handleInputChange} />
      <label>Body</label>
      <textarea rows="10"  required type="text" name="description" value={note.description} onChange={handleInputChange} />
     
      <div className="row-md-12" >  
      <button className=" col-md-3 btn btn-primary float-right" >Save</button>
      </div>
    </form>
    </div>
    </div>
  )
}

export default EditNoteForm
