import React from "react";
import "./Login.css";
import { Button } from "../../BaseComponents/Button/Button";

const Login = () => {
  return (
    <>
      <div className="root-div-login">
        <div className="div-filds">
          <h2>Login</h2>
          <p onClick={() => (document.location = "/SignIn")}>
            Do you have’t account? Sing In!{" "}
          </p>
          <label>Email: </label>
          <input
            placeholder="MohamadAminkeimasi@gmail.com"
            type="email"
            className="input-regi"
          />
          <label>Password:</label>
          <input
            placeholder="*****************  "
            type="password"
            className="input-regi"
          />
          <p>Do you forget password? recover now!</p>
          <Button
            bgColor="#252525"
            border="white solid 1px "
            color="white"
            height={60}
            radius="10px"
            className="btn-login-page"
            width={360}
          >
            Login
          </Button>
        </div>
        <div className="div-img-login">
          <img src={"/Assets/Images/ImgLogin.png"} />
        </div>
      </div>
    </>
  );
};
export default Login;
