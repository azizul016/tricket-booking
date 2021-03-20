import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "./../../App";
import firebaseConfig from "./FirebaseConfig/FirebaseConfig";

const Login = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || {
    from: { pathname: "/category-details/:id" },
  };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleGoogleSignIn = () => {
    var googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        // console.log(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // var email = error.email;
        // var credential = error.credential;
        // console.log(errorCode, errorMessage, email, credential);
      });
  };

  // handle github signin
  const handleGithubSignIn = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(githubProvider)
      .then((res) => {
        console.log(res);
        if (res) {
          history.push(from);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 mx-auto mt-5'>
          <div className='card bg-info'>
            <div className='card-body'>
              <form>
                <div className='form-group'>
                  <label htmlFor=''>Email</label>
                  <input
                    className='form-control'
                    type='email'
                    name='email'
                    id=''
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor=''>Password</label>
                  <input
                    className='form-control'
                    type='email'
                    name='password'
                    id=''
                  />
                </div>

                <button className='btn btn-success'>Login</button>
              </form>
              <br />
              <button
                onClick={handleGoogleSignIn}
                className='btn btn-danger w-100 mb-3'
              >
                Sign With Google
              </button>
              <button
                onClick={handleGithubSignIn}
                className='btn btn-success w-100'
              >
                Sign With Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
