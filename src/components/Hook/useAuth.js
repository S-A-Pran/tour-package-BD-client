import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../Firebase/firebase.init";

firebaseInitialization();
const provider = new GoogleAuthProvider();
const auth = getAuth();

const useAuth = () =>{
    const [user, setUser] = useState({});

    const googleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            setUser(user);
            console.log(result.user);
        }).catch((error) => {
            alert(error.message)
        });
    }

    const logOut = () =>{
        const proceed = window.confirm('Are you sure to log out?')
        if(proceed){
            signOut(auth).then(() => {
                setUser({});
                alert('Sign out successfully');
            }).catch((error) => {
                alert(error.message);
            });
        }
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              
            }
          });
    },[user])

    return {
        user,
        googleSignIn,
        logOut
    }
}

export default useAuth;