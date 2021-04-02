import React from 'react'

const loginScreen = ({ history }) => {

    const handleClick = () =>{
        history.replace('/')
    }

    return (
        <div className='container mt-5'>
            <h1>Login Screen</h1>
            <hr/>

            <button
                className='btn btn-primary'
                onClick={ handleClick }
            >
                Login
            </button>
        </div>
    )
}

export default loginScreen