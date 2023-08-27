
import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/NoteState';
import Login from './Components/login';
import SignUp from './Components/SignUp';
import Alert from './Components/Alert';
import { useState } from 'react';

function App() {
  const [alert, setAlert]= useState(null)
  const showAlert= (message, type) => {
  setAlert(
    {
      message:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
    <NoteState>
    <Router>
    <NavBar showAlert={showAlert}/>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
          <Route  exact path="/" element={  <Home showAlert={showAlert}/>}/> 
          <Route exact path="/about"  element={<About/>} />      
          <Route exact path="/login"  element={<Login showAlert={showAlert}/>} />  
          <Route exact path="/signup"  element={<SignUp showAlert={showAlert}/>} />   
        </Routes>
        </div>
        </Router>
        </NoteState>
    </>
  );
}


export default App;
