// Using create-react-app, create a new React project. 
// Create a LoginForm component that contains the following:
// Username and password input fields, an h3 that says Log In, with a border.
// Style the component using the default generated CSS file.
// Create a Navigation component that contains links styled like a navbar.
// The links don't have to go anywhere.
// Put the Navigation component at the top of the page 
// and the LoginForm in the center of the page.

import React from "react";

export default class LogInForm extends React.Component{
    render(){
        return (
            <div className="LogInForm">
                <h3>Log In</h3>
                <input type="text" placeholder="User Name"></input><br></br>
                <input type="text" placeholder="Password"></input><br></br>
                <br></br>
                <button>Submit</button>
            </div>
        )
    }
}