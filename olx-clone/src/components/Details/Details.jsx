import React, { useEffect } from 'react'
import "./Details.css"
import { MdKeyboardArrowRight } from "react-icons/md";
import Layout from '../Layout/Layout';
import { useLocation } from 'react-router-dom';
import { db } from '../../firebase/config';
import { doc } from 'firebase/firestore';

function Details() {
    const {state} = useLocation()
    const {name, date, location, price, brand , url, user, userid} = state;

    // useEffect(() => {
    //     const userDoc = doc(db, "users", userid);
    //     console.log("user: ",userDoc)

    // }, [])
    

    
    return (
        <Layout>
        <div className='bg-[#EFF1F3]'>
            <div className="w-full shadow-md pb-1">
                <div className='container h-24 mx-auto flex items-end justify-start  text-[#002f34]'>
                    <div className='nav-lite mb-[2px] text-light'>Produts</div>
                    <MdKeyboardArrowRight size={26} />
                    <div className='nav-lite mb-[2px] text-light'>Product Details</div>
                    <MdKeyboardArrowRight size={26} />
                    <div className='nav-lite mb-[2px] text-light'>Product Name</div>
                </div>
            </div>
            <div className="w-full h-full mt-10">
                <div class="container mx-auto">
                    <div className='bg-black w-full h-[400px]' style={{ backgroundImage: `url(${url})`, backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></div>
                </div>
                <div class="container mx-auto mt-8 pb-10">
                    <div className="detail-wapper flex gap-5 ">
                        <div className="product-details w-2/3 h-40 bg-white rounded-lg p-6">
                            <div className='text-[#002f34] text-4xl font-bold'>{name}</div>
                            <div className='text-[#002f34] text-md mt-1'>{brand}</div>  
                            <div className='text-[#002f34] text-sm mt-1'>{location}</div>
                            <div className='text-[#002f34] text-sm mt-1'>{date}</div>
                        </div>
                        <div className="seller-details w-2/3 h-40 bg-white rounded-lg p-6">
                        <div className='text-[#002f34] text-md font-medium '>Seller Details :</div>
                        <div className='text-[#002f34] text-2xl my-2 font-bold'>Seller name : {user}</div>
                            <div className='text-[#002f34] text-xs mt-1'>Seller ID: {userid}</div>
                            <div className='text-[#002f34] text-sm mt-1'>Uploaded date: {date}</div>
                        </div>
                        <div className="price w-1/3 h-40 bg-white rounded-lg p-6">
                            <div className='text-[#002f34] text-5xl font-bold  '>&#8377; {price}</div>
                            <button className='w-full bg-[#002f34] rounded py-3 font-bold text-white mt-3  hover:bg-[#0e2225]'>Buy Product</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </Layout>
    )
}

export default Details