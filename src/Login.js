import axios from 'axios';
import React,{useState} from 'react'
import {Link} from "react-router-dom"
import Success from './Success';



const Login = () => {
    const[email,setEmail]=useState(null);
    const[password,setPassword]=useState(null);
    const[errorMessage,setErrorMessage]=useState("Something went wrong please try again")
    

    const saveData=e=>
    {
        setErrorMessage(" ")
       e.preventDefault()
       console.log({email,password})
       axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffLogin',{email,password})
       .then(response=>{
           console.log(response);
           console.log(response.status);
           if(response.status===200) setErrorMessage("Login Successful")
       })
       .catch(error=>{
           console.log(error.response);
          
       })
       console.log(errorMessage);
    }
    return (
        <div className="container">
            <h2>LOGIN PAGE</h2>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="string" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                    <button type="submit" className="btn btn-primary" onClick={saveData}>Submit</button>
                    <Link to="/result_page">
                        <button type="button" className="btn btn-secondary" style={{marginLeft:"2%"}}>Result Section</button>
                        <Success errorMessage={errorMessage} /> 
                    </Link>
                
            </form>
        </div>
    )
}

export default Login;
