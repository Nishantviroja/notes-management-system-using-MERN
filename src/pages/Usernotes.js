import React from 'react'
import Notes from "../components/Notes";


export const Usernotes = (props) => {
  const {showAlert} = props
  return (
      <div>
      <h5>Tamru Gyaan iyaaa lakho</h5>
      <Notes showAlert={showAlert}/>
  </div>
  )
}
