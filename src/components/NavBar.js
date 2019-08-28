import React from 'react';

export default function Navbar(props) {

    return (
      <div>
          <nav className="navbar">
            <div>
            <br />
            <a className="mainlogo navlink" name="STEEZ." href="/">STEEZ.</a>
                <div>
                    <button type="button" className="navlink" name="Register">REGISTER</button>

                    {/* for now, I am just keeping the Register Button and LogIn button option. 
                    Figure out the user Auth later - with the login terinary option */}

                    
                    {/* {this.props.currentUser 
                    ? (<button className="navlink" name="Logout">LOGOUT</button>) :  */}
                    
                    <button className="navlink" name="Login">LOGIN</button>
                
                
                </div>
            </div>
          </nav>
          <br/><br/>
        </div>
    );
}