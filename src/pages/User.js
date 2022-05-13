import React from 'react'
import Notes from "../components/Notes";


export const User = (props) => {
  const {showAlert} = props
  return (
      <div>
      <h5>Tamru Gyaan iyaaa lakho</h5>
      <Notes showAlert={showAlert}/>
  </div>
  )
}
