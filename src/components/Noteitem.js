import React, {useContext} from 'react'
import noteContext from "../context/notes/NoteContext"

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const { note,updateNote,name} = props;
    console.log("ferfre",note)
    console.log(props)
    console.log(name)
    return (
        <div className="col-md-4"> 
            <div className="card my-3 border border-1 border-secondary"> 
                <div className="card-body ">
                <h5 className="card-text text-start"><span class=" me-2 fw-bold align-middle">{note.title}</span>-<span class="badge badge-secondary fst-italic ms-2">{note.tag}</span></h5>
                <p className="card-text">{note.description}</p> 
                
                </div>
                <div class="card-footer d-flex justify-content-around ">
                <button type="submit" className="btn btn-primary col-5  "onClick={()=>{updateNote(note) }}> <i className="fa-solid fa-pen-to-square mx-2"onClick={()=>{updateNote(note)}} ></i>Edit</button>
                <button type="submit" className="btn btn-danger col-5 "onClick={()=>{deleteNote(note._id);props.showAlert("delete thai gaiu tru kamm","Success");}}> <i className="fa-solid fa-trash mx-2"onClick={()=>{deleteNote(note._id)}}  ></i>Delete</button>
                </div>
            </div>
           
        </div>
    )
}

export default Noteitem