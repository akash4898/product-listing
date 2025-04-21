import React, { createContext, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from '../Firebase';

export const Context = createContext();
export default function MainContext({children}) {

    const oldCardData = JSON.parse(localStorage.getItem("CART")) ?? [];
    const oldLoginData = localStorage.getItem("token") ?? '';
    const[cart,setcart] = useState(oldCardData);
    const[user,setUser] = useState(oldLoginData);
    
    useEffect(
      ()=>{
        localStorage.setItem("CART",JSON.stringify(cart))
      },[cart]
    )

    useEffect(
      ()=>{
        localStorage.setItem("token",user);
      },[user]
    )
    // console.log(cart)
    const loginWithGoogle = ()=>{
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          setUser(user.accessToken)
          toast.success("User Login Successfully");
          navigate('/')
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          toast.error("User not Login");
          console.log(error)
        });
    }
  return (
    <>
    <Context.Provider value={{ cart , setcart , toast ,user,setUser,loginWithGoogle}}>
        {children}
        <Toaster
         position="bottom-right"
         reverseOrder={false}
          />
    </Context.Provider>
    
    </>
  )
}


