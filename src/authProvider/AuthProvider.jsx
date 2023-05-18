
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/Firebase";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [loading,setLoading]= useState(true)

  
    const user = { name: "Rofiq" }
 
// user registration 
    const userRegister=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
  

// user profile update 
const userProfileUpdate=(user,update)=>{
    return updateProfile(user,update)
}



    const userInfo = {
        user,
        userRegister,
        userProfileUpdate
        
    }

    return (
        <AuthContext.Provider value={userInfo}>
        {children}
        </AuthContext.Provider>

    )
};

export default AuthProvider;