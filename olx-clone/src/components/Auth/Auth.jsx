import React, { createContext } from "react";
import "./Auth.css";
import { FaArrowLeft } from "react-icons/fa";
import { useState, useContext } from "react";
import Layout,{AuthContext, FirebaseContext} from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Auth() {


  const [signup, setSignup] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginemail, setloginEmail] = useState("");
  const [loginpassword, setloginPassword] = useState("");

// const {setUsernow} = useContext(AuthContext)
    
  function handleSignup() {
    setSignup(!signup);
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        const user = userCredential.user;
        updateProfile(user, {
          displayName: username,
        });
        // setUsernow(user.id)
        console.log(user);
        navigate("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginemail, loginpassword)
      .then((userCredential) => {
        const user = userCredential.user;
        // setUsernow(user.id)        
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <Layout>
        {!signup ? (
          <div>
            <div className="h-16 bg-[#EFF1F3] w-full"></div>
            <div className="h-[700px] w-full bg-[#EFF1F3] flex items-center">
              <div className="w-[400px] h-[600px] bg-white rounded-lg mx-auto flex flex-col  items-center">
                <div className="actions w-full flex justify-start p-6 size={20}">
                  <FaArrowLeft
                    className="hover:cursor-pointer"
                    onClick={() => navigate(-1)}
                    size={20}
                  />
                </div>
                <img src="./olx-logo.png" className="w-16" alt="" />
                <h1 className="font-semibold text-lg text-[#002f34] mt-10">
                  Enter Email and Password
                </h1>
                <form className="flex flex-col items-center w-full">
                  <input
                    value={loginemail}
                    onChange={(e) => setloginEmail(e.target.value)}
                    type="email"
                    className="input-text mt-10 w-[80%]"
                    placeholder="Email"
                  />
                  <input
                    value={loginpassword}
                    onChange={(e) => setloginPassword(e.target.value)}
                    type="password"
                    className="input-text mt-5 w-[80%]"
                    placeholder="Password"
                  />
                  <button
                    onClick={onLogin}
                    className="w-[80%] bg-[#002f34] rounded py-3 font-bold text-white mt-10 hover:bg-[#0e2225]"
                  >
                    Login
                  </button>
                </form>
                <h1
                  className="font-normal text-sm underline text-[#002f34] mt-10 hover:cursor-pointer hover:text-black"
                  onClick={handleSignup}
                >
                  Create an account
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="h-16 bg-[#EFF1F3] w-full"></div>
            <div className="h-[700px] w-full bg-[#EFF1F3] flex items-center">
              <div className="w-[400px] h-[600px] bg-white rounded-lg mx-auto flex flex-col  items-center">
                <div className="actions w-full flex justify-start p-6 size={20}">
                  <FaArrowLeft
                    onClick={() => navigate(-1)}
                    className="hover:cursor-pointer"
                    size={20}
                  />
                </div>
                <img src="./olx-logo.png" className="w-16" alt="" />
                <h1 className="font-semibold text-lg text-[#002f34] mt-8">
                  Create Account
                </h1>
                <form className="flex flex-col items-center w-full">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input-text mt-5 w-[80%]"
                    placeholder="Username"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-text mt-5 w-[80%]"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-text mt-5 w-[80%]"
                    placeholder="Password"
                  />
                  <button
                    onClick={onSubmit}
                    className="w-[80%] bg-[#002f34] rounded py-3 font-bold text-white mt-8 hover:bg-[#0e2225]"
                  >
                    Create
                  </button>
                </form>
                <h1
                  className="font-normal text-sm underline text-[#002f34] mt-5 hover:cursor-pointer hover:text-black"
                  onClick={handleSignup}
                >
                  Login with account
                </h1>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}


export default Auth;
