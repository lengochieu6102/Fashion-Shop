import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { useState, useEffect } from 'react';



// Configure Firebase.
const config = {
    apiKey: 'AIzaSyCoVAH-UnLPuesu64iVReMvC85xsPAlZCE',
    authDomain: 'fashion-shop-app.firebaseapp.com',
};
firebase.initializeApp(config);
// Configure FirebaseUI.
const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: '/',

};
function LoginPage(props) {
    const [isSignedIn, setIsSignedIn] = useState(false);
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
            console.log(user);
            if(!user) {
                localStorage.removeItem('user');
                console.log("User is not signed in");
                return;
            }
            localStorage.setItem('user',JSON.stringify(user));
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);
    
    if (!isSignedIn) {
        return (
            <div className="text-center">
                <h1>Đăng nhập</h1>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        );
    }
    return (
        <div className="text-center">
            <div >
                <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
            </div>
            <button className="btn btn-primary" onClick={() => firebase.auth().signOut()}>Sign-out</button>
        </div>
    );
}

export default LoginPage;