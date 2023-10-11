import React from "react";
import AppBar from "../../Components/Appbar/Appbar";

import "./SignIn.css";

// import { Input } from "../../Components/Input/Input";
import imgSignIn from '../../Assets/Images/imgSignIn.png';

const SignIn = () => {

  return (

    <>
      <AppBar />

        <div className="root-div-SignIn">
            <div className="div-filds">
                <h2>SignIn</h2>
                <p onClick={() => document.location = '/Login'}>Do you have  account? Login! </p>
                <label>Email: </label>
                <input placeholder="MohamadAminkeimasi@gmail.com" type="email" className="input-regi"/>
                <label>Password:</label>
                <input placeholder="*****************" type="password" className="input-regi"/>
                <label>Confirm Password:</label>
                <input placeholder="*****************" type="password" className="input-regi"/>
                <p>Do you forget password? recover now!</p>
                <button className="btn-SignIn-page">Login</button>
            </div>
            <div className="div-img-SignIn">
                <img src={imgSignIn}/>
            </div>
        </div>
      
    </>
  );
};
export default SignIn;
