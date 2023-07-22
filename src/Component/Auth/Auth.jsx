import { createContext, useEffect, useState } from 'react';
import app from '../../../firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContest = createContext();

const auth= getAuth(app);
const Auth = ({children}) => {
    const[user, setUser] = useState({})
    const[loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
// Google Provider
    const googleSignIn= () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
// Create Provider
    const createUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
// Sign-In Method
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
// Logout  
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, loggedUser=>{
            setUser(loggedUser);
            setLoading(false);
       });
       return()=> {
           unsubscribe();
       };
   },[])

   const authInformation={
    googleSignIn,
    createUser,
    signIn,
    logOut,
    user,
    loading
}

    return (
        <div>
             <AuthContest.Provider value={authInformation}>
                {children}
            </AuthContest.Provider>
        </div>
    );
};

export default Auth;