import React from 'react'
import {Link} from "react-router-dom"
const HomePage = () => {
    return (
        <div >
            <h1>WELCOME TO THE HOMEPAGE OF API LOGIN</h1>
            <div className="d-flex justify-content-evenly" style={{margin:"8%"}}>
                <Link to="/login_page">
                    <button type="submit" className="btn btn-danger" >Login Section</button>
                </Link>
                <Link to="/registration_page">
                    <button type="submit" className="btn btn-warning" >Registration Section</button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage
