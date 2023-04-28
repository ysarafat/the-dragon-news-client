import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../Firebase/Firebase.config";
const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProviders = ({children}) => {
    const [user ,setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email,password) => {
        setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) =>{
            setUser(loggedUser)
            setLoading(false)

        })
        return ()=> {
            unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logout

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;