import React from { useState } 'react';

export default function Navbar(props) {

    const [currentUser]

    function handleClick(e) {

    }

    return (
        <nav className="navbar">
          <div>
            <br />
            <a className="mainlogo navlink" name="STEEZ." href="/home">
              STEEZ.
            </a>
            <div>
              <button
                type="button"
                className="navlink"
                name="Register"
                // onClick={this.handleOut}
              >
                REGISTER
              </button>
              {this.props.currentUser ? (
                <button
                //   onClick={this.handleClick}
                  className="navlink"
                  name="Logout"
                >
                  LOGOUT
                </button>
              ) : (
                <button className="navlink" name="Login" 
                // onClick={this.handleIn}
                >
                  LOGIN
                </button>
              )}
            </div>
          </div>
        </nav>
      );
}