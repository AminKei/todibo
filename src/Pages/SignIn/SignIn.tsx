import React from "react";

import "./SignIn.css";

import { Button } from "../../BaseComponents/Button/Button";

const SignIn = () => {
  return (
    <>
      <div className="root-div-SignIn">
        <div className="div-filds">
          <h2>SignIn</h2>
          <p onClick={() => (document.location = "/Login")}>
            Do you have account? Login!{" "}
          </p>
          <label>Email: </label>
          <input
            placeholder="MohamadAminkeimasi@gmail.com"
            type="email"
            className="input-regi"
          />
          <label>Password:</label>
          <input
            placeholder="*****************"
            type="password"
            className="input-regi"
          />
          <label>Confirm Password:</label>
          <input
            placeholder="*****************"
            type="password"
            className="input-regi"
          />
          <Button
            bgColor="#252525"
            border="white solid 1px "
            color="white"
            height={60}
            radius="10px"
            className="btn-SignIn-page"
            width={360}
          >
            Sign In
          </Button>
        </div>
        <div className="div-img-SignIn">
          <img src={"/Assets/Images/imgSignIn.png"} />
        </div>
      </div>
    </>
  );
};
export default SignIn;
