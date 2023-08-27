import React from 'react'
import { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContexts'
const Noteitem = (props) => {
  const Context= useContext(NoteContext)
    // eslint-disable-next-line
    const {deleteNote}=Context
    const {note, updateNote}=props
  return (
    <div className='col-md-3 '>
      <div className="card my-3" >
  
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.descriptions }</p>
    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}} ></i>
    <i className="fa-solid fa-trash-can mx-2"
     onClick={()=>{
      deleteNote(note._id)
      props.showAlert("Note deleted successfully", "success")
    }}></i>

  </div>
</div>
    </div>
  )
}

export default Noteitem
