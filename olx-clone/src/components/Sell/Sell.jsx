import React from 'react'
import "./Sell.css"
import { FaArrowLeft } from "react-icons/fa";
import { useState } from 'react';
import Layout from '../Layout/Layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { db,auth, storage } from "../../firebase/config";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";



function Sell() {
    const [file, setFile] = useState();
    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [price, setPrice] = useState()
    const [location, setLocation] = useState();
    
    const navigate = useNavigate()
    const {state} = useLocation()
    const {user,userid} = state



    

    function handleChange(e) {
        setFile(e.target.files[0]);
    }
    const sellProduct = async () => {
        console.log(`state : ${state}`)
        console.log(`user : ${user}`)
        // db.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
        //     ref.getDownloadURL().then((url)=>{
        //         console.log(url)
        //     })
        // })
        const storageRef = ref(storage, `/images/${file.name}`);

        // Upload the image
        await uploadBytes(storageRef, file);

            // Get the download URL of the uploaded image
        const downloadURL = await getDownloadURL(storageRef);

            // Log or use the download URL as needed
        console.log('Image uploaded. Download URL:', downloadURL);


        const productCollectionRef = collection(db, "olx");
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let currentDate = `${day}-${month}-${year}`;
        const prod = {
            name:name,
            price:Number(price),
            location :location,
            brand:category,
            date : currentDate,
            user:user,
            userid:userid,
            url:downloadURL
        }
        await addDoc(productCollectionRef, prod);
        navigate("/")
      };


    return (
        <Layout>
        <div>
            <div className='h-16 bg-[#EFF1F3] w-full'></div>
            <div className='h-[700px] w-full bg-[#EFF1F3] flex items-center'>

                <div className='w-[400px] h-[600px] bg-white rounded-lg mx-auto flex flex-col  items-center'>
                    <div className="actions w-full flex justify-between p-6 pb-2 size={20}">
                        <FaArrowLeft className='hover:cursor-pointer' size={20} onClick={()=>navigate(-1)}/>
                    </div>
                    <h1 className='font-semibold text-3xl text-[#002f34]'>Sell Product</h1>
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className='input-text mt-7 w-[80%]' placeholder='Product Name'/>
                    <input type="text" value={category} onChange={(e)=> setCategory(e.target.value)} className='input-text mt-5 w-[80%]' placeholder='Category' />
                    <input type="number" value={price} onChange={(e)=> setPrice(e.target.value)} className='input-text mt-5 w-[80%]' placeholder='Price' />
                    <input type="text" value={location} onChange={(e)=> setLocation(e.target.value)} className='input-text mt-5 w-[80%]' placeholder='Location' />
                    <div class="grid w-full max-w-xs items-center gap-1.5 mt-2">
                        <label class="text-sm text-gray-400 font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-1">Picture</label>
                        <input onChange={handleChange} id="picture" type="file" class="input-text border-2 flex h-10 w-full  border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium" />
                    </div>
                    {file && <img className="h-14 mt-2" src={URL.createObjectURL(file)} />}

                    <button onClick={sellProduct} className='w-[80%] bg-[#002f34] rounded py-3 font-bold text-white mt-4 hover:bg-[#0e2225]'>Sell</button>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default Sell