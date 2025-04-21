import React, { useState } from 'react'
import Filter from '../Components/Filter'
import Product from '../Components/Product'
import { useParams } from 'react-router-dom'

export default function Shop() {
  const {slug} = useParams();
  const [rating,setRating] = useState(1);
  const [price,setPrice] = useState({from:0,to:10000})
  
  return (
    <>
        <div className='grid grid-cols-6'>
            
            <div className='col-span-1'>
                <Filter slug={slug} rating={rating} setRating ={setRating} price={price} setPrice={setPrice}/>
            </div>

            <div className='col-span-5'>
                <Product slug={slug} rating={rating} price={price}/>
            </div>

        </div>
    </>
  )
}
