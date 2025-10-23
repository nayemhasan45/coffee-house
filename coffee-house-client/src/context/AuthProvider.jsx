import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebaseAuth/firebase.config';

const AuthProvider = ({children}) => {

    // register user 
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // login user 
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // logout user 
    const logOutUser = ()=>{
        return signOut(auth);
    }
    const user ={
        createUser,
        loginUser,
        logOutUser,
    }
    return (
        <AuthContext value={user}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;