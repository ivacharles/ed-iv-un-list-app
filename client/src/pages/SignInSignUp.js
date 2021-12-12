import React from 'react';
import { Redirect } from 'react-router-dom';
import {FaFacebookF} from 'react-icons/fa';
import {BsGoogle} from 'react-icons/bs';
import { AuthContext } from '../context/AuthContext';

// function SingInSignUp(props) {
//   return (
//     <div className="conatiner-fluid">
//         <SignUp />
//     </div>
//   );
// }
// function SignUp() {
class SignUp extends React.Component {
    state = {
      redirectToReferrer: false,
      failed: false,
      firstName: "",
      lastName: "",
      contact_email: "",
      password: "",
      zip: 0,
      city: ""
    }
  
    fieldChanged = (name) => {
      return (event) => {
        let { value } = event.target;
        this.setState({ [name]: value });
      }
    }
  
    login = (e) => {
      e.preventDefault();
      const auth = this.context;
      let { contact_email, password } = this.state;
      auth.authenticate( contact_email, password )
        .then((user) => {
          this.setState({ redirectToReferrer: true });
        })
        .catch((err) => {
          this.setState({ failed: true });
        });
    }
  
    signup = (e) => {
      e.preventDefault();
      const auth = this.context;
      let { firstName, lastName, contact_email, password, zip, city } = this.state;
      auth.signup( firstName, lastName, contact_email, password, zip, city )
      .then((user) => {
        this.setState({ redirectToReferrer: true });
      })
      .catch((err) => {
        this.setState({ failed: true });
      });
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer, failed } = this.state;
        
        if (redirectToReferrer) {
            return <Redirect to={'/dashboard'} />;
        }
        let err = "";
        if (failed) {
            err = <div className="alert alert-danger" role="alert">Login Failed</div>;
        }
        return(
            <div className="p-5 row justify-content-center ">
                <div className="col-xs-4 col-sm-12 col-lg-4 col-md-8 p-5 ">
                    <h1 class="h3 mb-0 fw-normal">Sign in</h1>
                    {/* <GoogleLogin
                        class="w-100 btn btn-lg btn-dark my-3"
                        clientId='899325025241-3lj3fjqaia7g1rfl9g2k2ap49sr1pvk7.apps.googleusercontent.com'
                        buttonText="Sign in with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}>
                    </GoogleLogin> */}
                    <button class="w-100 btn btn-lg btn-dark" type="submit"><FaFacebookF /> Signin with Facebook </button>
                <form onSubmit={this.login}>
                 <div class="form-floating my-4">
                <input
                    name="contact_email" 
                    type="email" 
                    class="form-control" 
                    id="floatingInput" 
                    placeholder="name@example.com"
                    value={this.state.contact_email}
                    onChange={this.fieldChanged('contact_email')}
                />
                <label for="floatingInput">Email address</label>
                </div>
                 <div class="form-floating">
                <input
                    name="password"
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.fieldChanged('password')}
                />
                <label for="floatingPassword">Password</label>
                </div>
    
                <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                </label>
                </div>
                <button class="w-100 btn btn-lg btn-dark" type="submit">Sign in</button>
                </form>
                </div>
    
                <div className="vr color-dark"></div>
    
                <div className="col-xs-4 col-sm-12 col-lg-4 col-md-8 p-5 ">
                <form  onSubmit={this.signup}>
                    <h1 class="h3 mb-3 fw-normal">Create account</h1>
                    <div class="row">
                            <div class="col">
                                <input
                                    name="firstName"
                                    type="text"
                                    class="form-control p-3 mb-4"
                                    placeholder="First name"
                                    value={this.state.firstName}
                                    onChange={this.fieldChanged('firstName')}
                                />
                            </div>
                            <div class="col ">
                                <input
                                    name="lastName"
                                    type="text"
                                    class="form-control p-3"
                                    placeholder="Last name"
                                    value={this.state.lastName}
                                    onChange={this.fieldChanged('lastName')}
                                />
                            </div>
                    </div>
                        <div class="form-floating mb-4">
                            <input
                                name="contact_email"
                                type="email"
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={this.state.contact_email}
                                onChange={this.fieldChanged('contact_email')}
                            />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input
                                    name="city"
                                    type="text"
                                    class="form-control p-3 mb-4"
                                    placeholder="City"
                                    value={this.state.city}
                                    onChange={this.fieldChanged('city')}
                                />
                            </div>
                            <div class="col ">
                                <input
                                    name="zip"
                                    type="number"
                                    class="form-control p-3"
                                    value={this.state.zip}
                                    onChange={this.fieldChanged('zip')}
                                />
                            </div>
                    </div>
                    <div class="row">
                            <div class="col">
                                <input
                                    name="password"
                                    type="password"
                                    class="form-control p-3 mb-4"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.fieldChanged('password')}
                                />
                            </div>
                            {/* <div class="col ">
                                <input type="password" name="password" class="form-control p-3" placeholder="Confirm password" />
                            </div> */}
                    </div>
                        <div class="form-check mb-3">
                            <input class="form-check-input bg-dark border border-0" type="checkbox" value="" id="flexCheckChecked" checked />
                            <label class="form-check-label" for="flexCheckChecked">
                                By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out at any time.
                            </label>
                        </div>
                    <button class="w-100 btn btn-lg btn-dark" type="submit">Sign up</button>
                </form>
                </div>
            </div>
        );
    }
}

SignUp.contextType = AuthContext
export default SignUp;
