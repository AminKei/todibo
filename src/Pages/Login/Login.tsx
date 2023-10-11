import React from "react";
import AppBar from "../../Components/Appbar/Appbar";

import "./Login.css";

// import { Input } from "../../Components/Input/Input";
import ImgLogin from '../../Assets/Images/ImgLogin.png';

const Login = () => {

  return (

    <>
      <AppBar />

        <div className="root-div-login">
            <div className="div-filds">
                <h2>Login</h2>
                <p onClick={() => document.location = '/SignIn'}>Do you have’t account? Sing In! </p>
                <label>Email: </label>
                <input placeholder="MohamadAminkeimasi@gmail.com" type="email" className="input-regi"/>
                <label>Password:</label>
                <input placeholder="*****************" type="password" className="input-regi"/>
                <p>Do you forget password? recover now!</p>
                <button className="btn-login-page">Login</button>
            </div>
            <div className="div-img-login">
                <img src={ImgLogin}/>
            </div>
        </div>
      
    </>
  );
};
export default Login;
