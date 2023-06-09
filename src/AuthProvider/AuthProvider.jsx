import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const googleProvider= new GoogleAuthProvider();

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logIn=(email,password)=>{
      setLoading(true);
      return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const profileUpdate=({name,photo})=>{
        
       return updateProfile(auth.createUser,{displayName:name,photoURL:photo});
    }


    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });

        return()=>{
            return unSubscribe();
        } 
            
    },[]);

    const authInfo={
        user,
        loading,
        auth,
        createUser,
        logIn,
        logOut,
        googleSignIn,
        profileUpdate
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;