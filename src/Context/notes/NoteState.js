import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContexts";

const NoteState = (props) => {
  const host = "https://inotebookbackend-fw78.onrender.com";
  const noteinit = [];
  const [notes, setNotes] = useState(noteinit);
  const getNotes = async () => {
    const response = await fetch(`${host}/api/note/featchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    //console.log(json)
    setNotes(json);
  };

  const addNote = async (note) => {
    const response = await fetch(`${host}/api/note/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(note),
    });
    console.log(note);
    const json = await response.json();
    setNotes(notes.concat(json));
    //console.log(notes)
  };

  const EditNote = async (note, id) => {
    const response = await fetch(`${host}/api/note/updatenot/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(note),
    });

    const json = await response.json();
    console.log(json);
    let newNote = JSON.parse(JSON.stringify(notes));
    for (let i = 0; i <= newNote.length; i++) {
      if (id === newNote[i]._id) {
        newNote[i].title = note.title;
        newNote[i].descriptions = note.descriptions;
        newNote[i].date = note.date;
        break;
      }
    }
    setNotes(newNote);
  };
  const deleteNote = async (id) => {
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/note/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const newNotes = notes.filter((notes) => {
      return notes._id !== id;
    });
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, getNotes, setNotes, EditNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
