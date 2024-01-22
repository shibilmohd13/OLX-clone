import React, { useContext, useEffect, useState } from 'react'
import "./Navbar.css"
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { Link,useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase/config';

import { AuthContext,FirebaseContext } from '../Layout/Layout';





function Navbar() {
    const navigate = useNavigate()
    const [logged, setLogged] = useState('')
    // const { setUsernow} = useContext(AuthContext)
    const [seller, setSeller] = useState('')

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              setLogged(user.displayName)
              setSeller(user.uid)
            //   setUsernow(user.id)
              
              // ...
              console.log('uid',uid)
              
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, [])

    useEffect(() => {
        console.log("uid", logged)
        console.log("seller",seller)
    }, [])
    

    const handleLogout = () => {               
        signOut(auth).then(() => {
            setLogged("")
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        console.error("not sign out")
        });}

    function handleSell(){
        navigate('/sell',{state:{user:logged , userid:seller}})
    }

    return (
        <>
            <div className="navbar h-16 w-full bg-[#EFF1F3] border-b-4 border-b-white shadow-md fixed">
                <div className='container w-auto mx-auto h-full flex items-center'>
                    <div className='left-nav flex flex-1 h-full items-center' >
                        <img  onClick={()=>navigate('/')} src='/olx-logo.png' className='h-6 mr-4' />
                        <input type="text" className='input-text' placeholder='Enter Text to Search' />
                    </div>
                    <div className="middle-nav flex w-[600px] h-full items-center ">
                        <input type="text" className='w-full input-text search-bar' placeholder='Enter Text to Search' />
                        <button className='w-10 bg-[#002f34] h-12 text-white rounded search-button pl-1'><IoSearch size={24} /></button>
                    </div>
                    <div className="right-nav flex flex-1 h-full items-center justify-around">
                    <div onClick={handleLogout} className='nav-text hover:text-cyan-800 hover:cursor-pointer'>ENGLISH</div>

                        {
                        (logged)?
                        (
                            <div onClick={handleLogout} className='nav-text hover:text-cyan-800 hover:cursor-pointer'>{logged}</div>
                        ):(
                            <div onClick={()=>navigate('/auth-user')} className='nav-text underline hover:cursor-pointer'>Login</div>
                        )
                        }
                        <button onClick={handleSell} className='nav-text px-6 py-1 bg-white rounded-3xl sell-button flex items-center'><FaPlus className='mr-1' />SELL</button>
                    </div>
                </div>

            </div>



        </>
    )
}

export default Navbar