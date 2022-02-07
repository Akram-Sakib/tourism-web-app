import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div class="container">
      <div class="screen">
        <div class="screen__content">
          <form class="login">
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input
                type="text"
                class="login__input"
                placeholder="User name / Email"
              />
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input
                type="password"
                class="login__input"
                placeholder="Password"
              />
            </div>
            <button class="button login__submit">
              <span class="button__text">Log In Now</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <span className="already_registerd">
            Not Registered yet? <a href="/register">Create An Account</a>
          </span>
          <div class="social-login">
            <h3>log in via</h3>
            <div class="social-icons">
              <a href="/h" class="social-login__icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/h" class="social-login__icon ">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="/h" class="social-login__icon">
                <i className="fab fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
