import React,{useState} from 'react'
import axios from "axios"
const Register = () => {
    const[name,setName]=useState(null);
    const[email,setEmail]=useState(null);
    const[password,setPassword]=useState(null);
    const[mobile,setMobile]=useState(null);
    const saveData=e=>
    {
       e.preventDefault()
       console.log({name,email,password,mobile})
       axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffRegister',{email,password,name,mobile})
       .then(response=>{
           console.log(response);
       })
       .catch(error=>{
           console.log(error.response);
       })
    }
    return (
        <div className="container" style={{margin:"3%"}}>
            <h2>REGISTRATION PAGE</h2>
            <form>
                <div className="mb-2">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Email</label>
                    <input type="string" className="form-control" id="exampleInputPassword1"  onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Password</label>
                    <input type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setPassword(e.target.value)}/>
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Mobile Number</label>
                    <input type="string" className="form-control" id="exampleInputPassword1" onChange={(e)=>setMobile(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={saveData}>Submit</button>
            </form>
        </div>
    )
}

export default Register
