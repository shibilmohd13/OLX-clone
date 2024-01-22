import React, { useEffect } from 'react'
import "./Card.css"
import { FaRegHeart } from "react-icons/fa";


function Card(props) {
    return (
        <div class="card">
            <div class="card-image flex justify-end p-2" style={{ backgroundImage: `url(${props.url})`, backgroundSize: "auto 100%", backgroundRepeat:"no-repeat",backgroundPositionX:"center" }}>
                <div className='rounded-full bg-white h-10 w-10 '>
                    <FaRegHeart className='mt-[11px] ml-[11px]' size={20} />
                </div>
            </div>
            <div class="heading text-2xl pb-0"> &#8377; {props.price}
                <div class="text-xs font-normal">{props.name}</div>
                <div class="text-xs font-light">{props.brand}</div>
                <div className="flex justify-between">
                    <div class="text-xs font-light">{props.location}</div>
                    <div class="text-xs font-light"> {props.date}</div>
                </div>
            </div>
        </div>
    )
}

export default Card