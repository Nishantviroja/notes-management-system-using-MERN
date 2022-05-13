import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 
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
    <div className="h100  container">
      
    <div className="col-4"></div>
    <form className="col-4" onSubmit={handleSubmit} >
    <div>
      <div className=" text-primary my-4 text-center" >
        <h1>SKYNotE</h1>
      </div>
      <div className="text-dark my-4 text-center"  >
        <h5> Creat Your Account on SKYNotE</h5>
      </div>
      </div>
       <div className="form-group">
    
    <input type="text" className="form-control my-3" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter Name" minLength={3} required/>
   
  </div>
  <div className="form-group">
    
    <input type="email" className="form-control my-3" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter Email" required/>
  </div>
  <div className="form-group">
    
    <input type="password" className="form-control my-3" id="password" name="password" onChange={onChange} placeholder="Password" minLength={5} required />
  </div>
  <div className="form-group">
    
    <input type="password" className="form-control my-3" id="cpassword"  name="cpassword" onChange={onChange} placeholder="Confirm Password" minLength={5} required />
  </div>
  
  <button type="submit" className="btn btn-primary btn-block my-3">Submit</button>
  <div className="text-center">
          <p className="text-danger">
          Already a member ? <Link to="/login">Log in</Link>
          </p>
        </div>
</form>
  
    <div className="col-4"></div>
  </div>

    
  )
}
