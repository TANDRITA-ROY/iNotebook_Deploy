import React  from 'react'
import { useNavigate  } from "react-router-dom";
import {
    Link,
    useLocation
  } from "react-router-dom";
import { useEffect } from "react";
import { Button } from 'react-bootstrap';

const NavBar = (props) => {
  const navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
  // Console.log(location.pathname)
  }, [location]);
  const handlLogout=()=>{
    localStorage.removeItem('token')
    props.showAlert("Logged out Successfully","success")
    navigate('/login');
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNoteBook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"? "active": ""}`}  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About</Link>
        </li>
       
      </ul>
      {!localStorage.getItem('token')?
      <form className="d-flex" role="search">      
      <Link className="btn btn-primary mx-2" to="/login" role="button">Log In</Link>
      <Link className="btn btn-primary mx-2" to="/signup" role="button">Sign Up</Link>
      </form>:
      <Button className="btn btn-primary mx-2" onClick={handlLogout}  >Log Out</Button>}
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
