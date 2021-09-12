import axios from 'axios';
import React,{useState} from 'react'

const Login = () => {
    const[email,setEmail]=useState(null);
    const[password,setPassword]=useState(null);
    const saveData=e=>
    {
       e.preventDefault()
       console.log({email,password})
       axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffLogin',{email,password})
       .then(response=>{
           console.log(response);
       })
       .catch(error=>{
           console.log(error);
       })
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
            </form>
        </div>
    )
}

export default Login;
