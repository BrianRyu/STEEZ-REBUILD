import React, { useState } from 'react';


export default function Login(props) {

    const [username, setName] = useState('')
    const [password, setPassword] = useState('')

    function handleUsernameChange(e) {
        setName(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e){
        console.log(e)
    }

    return (
        <div className="login-div">
        <h3>Login</h3>
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>{" "}
          <br />
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <input className="login-submit" type="submit" /> <br />
          <br />
        </form>
        Don't have account? <Link to="register">Register here</Link>
      </div>
    )
}