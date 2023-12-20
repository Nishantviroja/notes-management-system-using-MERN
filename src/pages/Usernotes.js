import React from 'react'
import Notes from "../components/Notes";


export const Usernotes = (props) => {
  const {showAlert} = props
  return (
    <div className="container">
      <Notes showAlert={showAlert}/>
  </div>
  )
}
