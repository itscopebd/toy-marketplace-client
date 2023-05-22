
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/Firebase";




export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)



    // user registration 
    const userRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // user profile update 
    const userProfileUpdate = (user, update) => {
        setLoading(true)
        return updateProfile(user, update)
    }

    // login with google 
    const loginWithGoogle = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // user login 
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out
    
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unscribe = onAuthStateChanged(auth, (logInUser) => {
            setUser(logInUser)
            setLoading(false)
        });
        return () => {
            unscribe()
        }
    }, [])

    const userInfo = {
        user,
        userRegister,
        userProfileUpdate,
        loginWithGoogle,
        userLogin,
        logOut,
        loading

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>

    )
};

export default AuthProvider;