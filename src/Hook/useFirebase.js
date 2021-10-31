import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import firebaseInitialization from "../Firebase/firebase.init";

firebaseInitialization();
const provider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const googleSignIn = () =>{
        setIsLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = () =>{
        const proceed = window.confirm('Are you sure to log out?')
        setIsLoading(true)
        if(proceed){
            signOut(auth).then(() => {
                setUser({});
                alert('Sign out successfully');
            }).catch((error) => {
                alert(error.message);
            })
            .finally(setIsLoading(false))
        }
    }

    useEffect(()=>{
        onAuthStateChanged(auth, async (user) => {
            if (user) {
              await setUser(user);
              setIsLoading(false)
            } else {
              
            }
          });
    },[])

    return {
        isLoading,
        user,
        setUser,
        setIsLoading,
        googleSignIn,
        logOut
    }
}

export default useFirebase;