import React from 'react';
function AccountCreation(props) {
  let userEmail = "LET THIS BE THE USER'S EMAIL.";
  return (
    <div>
      This is the account page.
      <p>
        <span>email address: </span> {userEmail}
      </p>
    </div>
  );
}
function Account(props){
  const daysMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const populateDays = () =>  {
    // ill get to this later
  }
  return  (
    <div id="card">
      <h3>
        Sign Up
      </h3>
      <p>
        It's quick and easy.
      </p>
      <hr/>
      <input className="signUpBox" placeholder="User Name" size="50" />
      <br/>
      <input className="signUpBox" placeholder="First Name" size="20" />
      &nbsp; &nbsp; &nbsp; &nbsp;
      <input className="signUpBox" placeholder="Last Name" size="20" />
      <br/>
      <input className="signUpBox" placeholder="Email Address" size="50" />
      <br/>
      <input className="signUpBox" placeholder="New password" size="50" />
      <br/>
      <select name="months" id="months" onChange="populateDays">
          <option value="1">Jan</option>
          <option value="2">Feb</option>
          <option value="3">Mar</option>
          <option value="4">Apr</option>
          <option value="5">May</option>
          <option value="6">Jun</option>
          <option value="7">Jul</option>
          <option value="8">Aug</option>
          <option value="9">Sep</option>
          <option value="10">Oct</option>
          <option value="11">Nov</option>
          <option value="12">Dec</option>
      </select>
      {/* Got to finish the select days */}
      {/* Got to finish the select years */}
      <br />
      <span>Gender</span>
      <div>
        <input className="signUpGender" type="radio" name="male" checked/>Rather not say
        <input className="signUpGender" type="radio" name="male" />Male
        <input className="signUpGender" type="radio" name="female"/>Female
      </div>
      <p>
        By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out at any time.
      </p>
      <button id="signUpButton">
        Sign Up
      </button>
      {/* On click we need to create account likely using post */}
    </div>
  );
}
export default Account;