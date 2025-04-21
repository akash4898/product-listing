import React, { useContext } from "react";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase";
import toast from "react-hot-toast";
import { Context } from "../Context/MainContext";


const RegisterPage = () => {
    const{loginWithGoogle} = useContext(Context);
  const registeruser = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        event.target.reset();
        toast.success("User Registration Successsflly");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("User not Created");
        console.log(error);
        // ..
      });
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-teal-500 py-12">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <div className="flex justify-center mb-4">
          <img src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="Logo" className="w-40 h-10" />
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-700">Register</h2>
        <form className="space-y-4" onSubmit={registeruser}>
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
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account? <Link to={"/login"} className="text-green-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;