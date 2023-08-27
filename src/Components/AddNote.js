import React from 'react'
import NoteContext from '../Context/notes/NoteContexts'
import { useContext } from 'react'
import {  useState } from "react";
const AddNote = (props) => {
    const Context= useContext(NoteContext)
    // eslint-disable-next-line
    const { addNote}=Context
    const [note, setNote]=useState({title:"", descriptions:""})
    
    const updateNote=(e)=>{
        setNote({...note, [e.target.name]: e.target.value})
        //console.log(note)
    }
    const AddnoteClick=(e)=>{
        e.preventDefault()
        addNote(note)
        setNote({title:"", descriptions:""})
        props.showAlert("Note Added successfully", "success")
    }
  return (
    <div className="container my-4">
      <h2>Add Your Notes</h2>
      <form>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" value={note.title} id="title" name="title" aria-describedby="emailHelp" placeholder="Enter the title of the note" required onChange={updateNote}/>
    
  </div>
  <div className="form-group my-1">
    <label htmlFor="descriptions">Descriptions</label>
    <input type="text" className="form-control" value={note.descriptions} id="descriptions" name="descriptions" placeholder="Enter the descriptions of the note" required onChange={updateNote}/>
  </div>
  <button disabled={ note.title.length <3 || note.descriptions.length<3} type="submit" className="btn btn-primary my-2" onClick={AddnoteClick}>Submit</button>
</form>

      </div>
  )
}

export default AddNote
