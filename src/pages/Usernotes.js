import React from 'react'
import Notes from "../components/Notes";


export const Usernotes = (props) => {
  const {showAlert} = props
  return (
      <div>
      <Notes showAlert={showAlert}/>
  </div>
  )
}
