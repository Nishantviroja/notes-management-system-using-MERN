import React,{useState} from 'react'
import {useNavigate} from "react-router-dom";
 
export const Signup = (props) => {
    
  const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""});
  let navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
   const {name, email, password} = credentials;
   const response = await fetch(`http://localhost:8000/api/auth/createuser`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({name, email, password}) 
  
    });
    const json = await response.json()
    console.log(json);
    if(json.success){
          // save the auth token and redirect
          localStorage.setItem('token',json.authtoken);
      
          navigate("/");
          props.showAlert("Moj kar ja ane login kar topaaaa","success")
      
        }
        else{
            props.showAlert("aa vastu tara mate nathi","danger")
        }
  }
  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div>
       <form onSubmit={handleSubmit} >
       <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter Name" minLength={3} required/>
   
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email" required/>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange} placeholder="Password" minLength={5} required />
  </div>
  <div className="form-group">
    <label htmlFor="cpassword">Password</label>
    <input type="password" className="form-control" id="cpassword"  name="cpassword" onChange={onChange} placeholder="Password" minLength={5} required />
  </div>
  
  <button type="submit" className="btn btn-primary m-2">Submit</button>
</form>
    </div>
  )
}
