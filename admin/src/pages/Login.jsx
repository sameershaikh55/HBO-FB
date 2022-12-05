import React from "react";
import login from "../assets/images/login.png";
import logo from "../assets/images/logo.svg";
import lock from "../assets/icons/lock.svg";
import Input from "../components/Input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login_container">
      <div className="login-left">
        <div className="inner-left d-flex flex-column">
          <img className="logo" src={logo} alt="" />

          <div className="d-flex flex-column">
            <Input label="Username" />
            <Input label="Password" icon={lock} />
            <Link to="/home" className="btn btn-lg bg_color2 rounded-3 border-0 f18">
              Login
            </Link>
          </div>

          <p className="text-white">v.1.0 Faktor 22 - All rights reserved</p>
        </div>
      </div>
      <div className="login-right">
        <h1 className="display-2">Understanding kpi’s can be easy and fun!</h1>
        <img src={login} alt="" />
      </div>
    </div>
  );
};

export default Login;
