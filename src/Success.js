import React from 'react'

const Success = ({errorMessage}) => {
    console.log(errorMessage);
    return (
        <div className="container">
            <h1>{errorMessage}</h1>
        </div>
    )
}
export default Success
