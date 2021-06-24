import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <div class="signup-form">
  <div class="container-sign">
    <h2>Welcome to ShareGrid</h2>
    <span><h5>Already a member? </h5><Link to="/SignIn">Sign in</Link></span>
    <form>
      <div class="input-fields">
      <input type="text" placeholder="First Name"></input>
       <input type="text" placeholder="Last Name"></input>
        <input type="text" placeholder="Email"></input>
         <input type="password" placeholder="password"></input>
      </div>
      <div class="checkbox">
        <input type="checkbox"></input>
        <label>By signing up as a member, I agree to ShareGrid's <a href="#">Terms of Service, Privacy Policy</a>, and <a href="#">Community Rules</a></label>
      </div>
        <button type="submit">Join Now</button>
    </form>
  </div>

</div>
            
        </>
    )
}

export default SignUp;
