import PropTypes from 'prop-types'
import { createContext,  useEffect,  useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext=createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [isLoading,setIsLoading]=useState(true);
    const provider=new GoogleAuthProvider();


    //create user 
    const createUser=(email,password)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

        //signInUser
        const LogIn=(email,password)=>{
            setIsLoading(true)
            return signInWithEmailAndPassword(auth,email,password)
        }

        
    //LogOut
    const LogOut=()=>{
        setIsLoading(true)
        return signOut(auth)
    }

      // onAuthStateChange
      useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setIsLoading(false)
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe()
        }
    },[])

        //google login
        const googleLogIn=()=>{
            setIsLoading(true)
            return signInWithPopup(auth,provider)
        }




    

    const Info={
        user,
        isLoading,
        createUser,
        LogIn,
        googleLogIn,
        LogOut,
    }

    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node,
}

export default AuthProvider;