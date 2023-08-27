import React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../Context/notes/NoteContexts";
import AddNote from "./AddNote";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Noteitem from "./Noteitem";
const Note = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdate = () => {
    setShow(false);
    EditNote(n, n._id);
    props.showAlert("Note updated successfully", "success");
  };
  const Context = useContext(NoteContext);
  const navigate = useNavigate();
  // eslint-disable-next-line
  const { notes, getNotes, EditNote } = Context;
  const [n, SetN] = useState({ _id: "", title: "", descriptions: "" });
  const ref = useRef(null);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      // props.showAlert("Plesae log in to view your notes", "danger")
      navigate("/login");
    }
  }, []);
  const updateNote = (note) => {
    // currentNote
    SetN(note);
    ref.current.click();
  };
  const hadleChange = (e) => {
    SetN({ ...n, [e.target.name]: e.target.value });
  };
  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <Button
        className="d-none"
        ref={ref}
        variant="primary"
        onClick={handleShow}
      >
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="title">Note Title</Form.Label>
              <Form.Control
                onChange={hadleChange}
                name="title"
                id="title"
                type="text"
                autoFocus
                value={n.title}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="descriptions">Note Descriptions</Form.Label>
              <Form.Control
                onChange={hadleChange}
                as="textarea"
                id="descriptions"
                name="descriptions"
                value={n.descriptions}
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleUpdate}
            disabled={n.title.length < 3 || n.descriptions.length < 3}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="row">
        <h2>Your Notes</h2>
        <div className="container mx-2">
          {notes.length === 0 && "No Notes To Display!"}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              updateNote={updateNote}
              showAlert={props.showAlert}
              note={note}
            />
          );
        })}
      </div>
    </>
  );
};

export default Note;
