import React from 'react';
import {FaFacebookF} from 'react-icons/fa';
import {BsGoogle} from 'react-icons/bs';
function SingInSignUp(props) {
  return (
    <div className="conatiner-fluid">
        <SignUp />
    </div>
  );
}

function SignUp(){
    return(
        <div className="p-5 row justify-content-center ">
            <div className="col-4 p-5 ">
            <form>
                <h1 class="h3 mb-0 fw-normal"> Sign in</h1>
            <button class="w-100 btn btn-lg btn-dark my-3" type="submit"><BsGoogle /> Sign in with Google </button>
            <button class="w-100 btn btn-lg btn-dark" type="submit"><FaFacebookF /> Signin with Facebook </button>

            <div class="form-floating my-4">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
            </div>
             <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
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

            <div className="col-4 p-5">
            <form>
                <h1 class="h3 mb-3 fw-normal">Create account</h1>

                <div class="row">
                        <div class="col">
                            <input type="text" class="form-control p-3 mb-4" placeholder="First name" />
                        </div>
                        <div class="col ">
                            <input type="text" class="form-control p-3" placeholder="Last name" />
                        </div>
                </div>
                    <div class="form-floating mb-4">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control p-3 mb-4" placeholder="City" />
                        </div>
                        <div class="col ">
                            <input type="text" class="form-control p-3" placeholder="Zip" />
                        </div>
                </div>
                <div class="row">
                        <div class="col">
                            <input type="text" class="form-control p-3 mb-4" placeholder="Password" />
                        </div>
                        <div class="col ">
                            <input type="text" class="form-control p-3" placeholder="Confirm password" />
                        </div>
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
export default SingInSignUp;