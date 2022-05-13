import React,{useState} from 'react'
import {useNavigate} from "react-router-dom";

export const Login = (props) => {
   const [credentials, setCredentials] = useState({email:"",password:""})
   let navigate = useNavigate();


    const handleSubmit = async (e)=>{
      e.preventDefault();
     const response = await fetch(`http://localhost:8000/api/auth/login`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({email:credentials.email,password:credentials.password}) 
    
      });
      const json = await response.json()
      console.log(json);
      if(json.success){
            // save the auth token and redirect
            localStorage.setItem('token',json.authtoken);
        //    const sendSubmit = ()=>{
            navigate("/user");
            props.showAlert("Avi jaaa andar","success")
        // }
      }
      else{
        props.showAlert("Saavvv khotu 6e bhai","danger")
      }
    }
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name='email'value={credentials.email} onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} placeholder="Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}
