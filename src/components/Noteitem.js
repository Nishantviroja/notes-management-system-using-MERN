import React, {useContext} from 'react'
import noteContext from "../context/notes/NoteContext"

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const { note,updateNote} = props;
    return (
        <div className="col-md-4"> 
            <div className="card my-3"> 
                <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p> 
                <button type="submit" className="btn btn-primary mx-2 "onClick={()=>{updateNote(note)}}> <i className="fa-solid fa-pen-to-square mx-2"onClick={()=>{updateNote(note)}} ></i>Edit</button>
                <button type="submit" className="btn btn-danger mx-2 "onClick={()=>{deleteNote(note._id)}}> <i className="fa-solid fa-trash mx-2"onClick={()=>{deleteNote(note._id)}}  ></i>Delete</button>
                {/* <i className="fa-solid fa-trash mx-2" ></i>
                <i className="fa-solid fa-pen-to-square mx-2" ></i> */}
                </div>
            </div>
        </div>
    )
}

export default Noteitem