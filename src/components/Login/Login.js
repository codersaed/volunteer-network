import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './config.firebase';
import logo from '../../logos/Group 1329.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            storeToken();
            history.replace(from);
            // ...
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    const storeToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                // Send token to your backend via HTTPS
                // ...
                sessionStorage.setItem('token', idToken)
            }).catch(function (error) {
                // Handle error
            });
    }
    return (
        <div>
            <div className="text-center pb-5 pt-4">
                <img style={{ height: '50px' }} src={logo} alt="" />
            </div>
            <div className="mt-5 w-50 container p-4" style={{ border: '1px solid gray', }}>
                <div className="text-center p-5">
                    <h2 className="font-weight-bold pb-4">Login With</h2>

                    <button className="py-2 px-5 bg-light" style={{ borderRadius: '20px' }} onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} color='#f4c20d' /> Continue With Google</button>
                    <p className="pt-4">Dont have an account? <Link>Create an account</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Login;