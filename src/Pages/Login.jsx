import React, { useContext } from "react";
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import { app } from "../Firebase";
import { Context } from "../Context/MainContext";
import { GoogleAuthProvider } from "firebase/auth";

const LoginPage = () => {

  const{user,setUser,loginWithGoogle} = useContext(Context);
  const navigate = useNavigate()

    const loginuser = (event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const auth = getAuth(app);
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user.accessToken)
                event.target.reset();
                toast.success("User Login Successfully");
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error("User not Login");
                console.log(error)

            });

    }

    // const loginWithGoogle = ()=>{
    //   const provider = new GoogleAuthProvider();
    //   const auth = getAuth(app);
    //   signInWithPopup(auth, provider)
    //     .then((result) => {
    //       const credential = GoogleAuthProvider.credentialFromResult(result);
    //       const token = credential.accessToken;
    //       const user = result.user;
    //       setUser(user.accessToken)
    //       toast.success("User Login Successfully");
    //       navigate('/')
    //     }).catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       const email = error.customData.email;
    //       const credential = GoogleAuthProvider.credentialFromError(error);
    //       toast.error("User not Login");
    //       console.log(error)
    //     });
    // }
    
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 py-12">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <div className="flex justify-center mb-4">
          <img src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="Logo" className="w-40 h-10" />
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-700">Login</h2>
        <form className="space-y-4" onSubmit={loginuser}>
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1 bg-gray-100">
              <FaUser className="text-gray-500" />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 bg-transparent outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1 bg-gray-100">
              <FaEnvelope className="text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-transparent outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1 bg-gray-100">
              <FaLock className="text-gray-500" />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 bg-transparent outline-none"
              />
            </div>
          </div>
          <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-600">Or login with</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button onClick={loginWithGoogle} className="w-full flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              <FaGoogle className="mr-2" /> Google
            </button>
            {/* <button onClick={loginWithFacebook} className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
              <FaFacebook className="mr-2" /> Facebook
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition">
              <FaTwitter className="mr-2" /> Twitter
            </button> */}
          </div>
        </div>
        <p className="text-sm text-center text-gray-600 mt-6">
          Don't have an account? <Link to={"/register"} className="text-blue-500 hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
