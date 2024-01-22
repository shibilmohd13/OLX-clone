import React, { useEffect, useState } from 'react'
import "./Body.css"
import Card from '../Card/Card'
import { db } from "../../firebase/config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Layout from '../Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase/config';



function Body() {

    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

            const fetchData = async () => {
                try {
                  const productCollection = collection(db, 'olx');
                  const querySnapshot = await getDocs(productCollection);
            
                  // Extract data from the query snapshot
                  const productsData = querySnapshot.docs.map((doc) => doc.data());

                  console.log(productsData)
            
                  // Set the state with the document data
                  setProducts(productsData);
            
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
              };
            
              fetchData();

    }, [])

    

    function singleProduct(item){
        navigate('/details',{state:{name:item.name,price:item.price , brand:item.brand, location:item.location, date:item.date ,user:item.user, userid:item.userid, url:item.url}})
    }
    
    
    

    return (
        <>
        <Layout>
            <div className="w-full shadow-md pb-2">
                <div className='container h-24 mx-auto flex items-end justify-around text-[#002f34]'>
                    <div className='nav-lite font-semibold'>ALL CATEGORIES</div>
                    <div className='nav-lite'>Cars</div>
                    <div className='nav-lite'>Motorcycles</div>
                    <div className='nav-lite'>Mobile Phones</div>
                    <div className='nav-lite'>For Sale: Houses & Apartments</div>
                    <div className='nav-lite'>Scooters</div>
                    <div className='nav-lite'>Commercial & Other Vehicles</div>
                    <div className='nav-lite'>For Rent: Houses & Apartments</div>
                </div>
            </div>
            <div className="w-full min-h-[400px] mb-10">
                <div className='container mx-auto flex items-end justify-between text-[#002f34]'>
                    <h1 className='text-2xl mt-3 mb-6'>Fresh recommendations</h1>
                </div>
                <div className="container grid grid-cols-4 gap-6 mx-auto">
                    {
                        products.map((item,index)=>
                        <div key={index} className='cards' onClick={()=>singleProduct(item)}><Card name={item.name} price={item.price} brand={item.brand} location={item.location} date={item.date} url={item.url}/></div>
                        )
                    }
                    
                </div>
            </div>

        </Layout>       
        </>
    )
}

export default Body