import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const host = "http://localhost:8000"
    const notesInitial = [
        
      ]
      const [notes, setNotes] = useState(notesInitial)

      // badhi notes
      const getNotes = async ()=>{
        //todo api call 
        //api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET', 
          headers: {
            'Content-Type': 'application/json',
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3NzkxZmZiNTZjYjc0NTI5YTliNjBhIn0sImlhdCI6MTY1MjAwMzM4N30.cZtgjkXEcDSWgcAvHaTVUtHJgp7FHAOEMXQ7RUgSi6E"
          },
      
        });
        const json = await response.json()
        console.log(json)
         setNotes(json)
        

       }
      // Add karo note
       const addNote = async (title,description,tag)=>{
        //todo api call 
        //api call
        
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3NzkxZmZiNTZjYjc0NTI5YTliNjBhIn0sImlhdCI6MTY1MjAwMzM4N30.cZtgjkXEcDSWgcAvHaTVUtHJgp7FHAOEMXQ7RUgSi6E"
          },
      body: JSON.stringify({title,description,tag}) 
        });
        

        console.log("Adding a navi note ")
        const note= {
          "_id": "61322f195573781a8ca8d0e089",
          "user": "6131dc5e3e4037cd4734a0664",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        };
         setNotes(notes.concat(note))

       }

      //delete karo note

      const deleteNote = async (id)=>{
        //todo api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: 'DELETE', 
          headers: {
            'Content-Type': 'application/json',
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3NzkxZmZiNTZjYjc0NTI5YTliNjBhIn0sImlhdCI6MTY1MjAwMzM4N30.cZtgjkXEcDSWgcAvHaTVUtHJgp7FHAOEMXQ7RUgSi6E"
          },

        });
        const json =  response.json();
        console.log(json)

         console.log("Deleting marooo aa note ne id" + id)
        const newNotes = notes.filter((note)=>{return note._id!==id})
         setNotes(newNotes)
      }

      //edit karo note
      const editNote = async (id, title,description,tag)=>{
        // api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3NzkxZmZiNTZjYjc0NTI5YTliNjBhIn0sImlhdCI6MTY1MjAwMzM4N30.cZtgjkXEcDSWgcAvHaTVUtHJgp7FHAOEMXQ7RUgSi6E"
          },
      body: JSON.stringify({title,description,tag}) 
        });
        const json = await response.json();
    console.log(json)

     let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
  }


    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;