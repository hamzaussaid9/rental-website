import React from 'react';
import { Link } from 'react-router-dom';
import './loginform.css';
const SignIn = () => {
    return (
        <>
         <div class="signup-form">
  <div class="container-sign">
    <h2>Welcome to ShareGrid</h2>
    <span><h5>Don't Have an Accout? </h5><Link to="/SignUp">Sign up</Link></span>
    <form>
      <div class="input-fields">
        <input type="text" placeholder="Email"></input>
         <input type="password" placeholder="password"></input>
      </div>
      <div class="checkbox">
        <input type="checkbox"></input>
        <label>By Login as a member, I agree to ShareGrid's <a href="#">Terms of Service, Privacy Policy</a>, and <a href="#">Community Rules</a></label>
      </div>
        <button type="submit">Login Here</button>
    </form>
  </div>

</div>   
        </>
    );
}

export default SignIn;
