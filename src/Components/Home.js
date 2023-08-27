import React from 'react'
import Note from './Note'


function Home(props) {
 
  return (
    <div>
      
      <Note showAlert={props.showAlert}/>
    </div>
  )
}

export default Home
