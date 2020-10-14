import React from 'react'

const NoteTable = props => (
  <div className="row ">
    <div className="col-md-12 ">
      {props.notes.length > 0 ? (
        props.notes.map(note => (
          <div className="row  border " key={note.id} onClick={() => { props.editRow(note) }}>
            <div className="col-md-10 table ">
              <div ><b>{note.title}</b></div>
              <div>{note.description}</div>
            </div>
            <div className="col-md-2">
            <button
                onClick={(e) => {
                  e.stopPropagation();
                  props.deleteNote(note.id)}
                }
                className="btn bg-transparent text-secondary"
              >
             X
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>
          <div className="row  border ">No notes</div>
        </div>
      )}
    </div>
  </div>
)

export default NoteTable
