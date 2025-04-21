import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


export default function Filter({slug,rating,setRating,price,setPrice}) {

    const [category,setcategory] = useState([]);

    const getCategory = ()=>{
        axios.get("https://dummyjson.com/products/categories").then(
            (success)=>{
                setcategory(success.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    const fromPrice = (event)=>{
        setPrice({...price, from:event.target.value})
    }
    const toPrice = (event)=>{
        setPrice({...price, to:event.target.value})
        
    }

    useEffect(
        ()=>{
            getCategory();
        },[]
    )
  return (
    <>
      {/* filter by Rating start  */}
      <div className='mx-2'>
                <h1 className='text-2xl my-3'>Filter by Rating</h1>
                <div onClick={() => setRating(4)} className={`py-2 border px-4 my-2 rounded-lg cursor-pointer ${rating == 4 ? 'bg-blue-500 text-white' : ''}  `}>
                    4⭐  & Above
                </div>
                <div onClick={() => setRating(3)} className={`py-2 border px-4 my-2 rounded-lg cursor-pointer ${rating == 3 ? 'bg-blue-500 text-white' : ''} `}>
                    3⭐  & Above
                </div>
                <div onClick={() => setRating(2)} className={`py-2 border px-4 my-2 rounded-lg cursor-pointer ${rating == 2 ? 'bg-blue-500 text-white' : ''} `}>
                    2⭐  & Above
                </div>
                <div onClick={() => setRating(1)} className={`py-2 border px-4 my-2 rounded-lg cursor-pointer ${rating == 1 ? 'bg-blue-500 text-white' : ''} `}>
                    1⭐  & Above
                </div>
            </div>
            {/* filter by Rating end  */}
            {/* filter by Price start  */}
            <div className='mx-2'>
                <h1 className='text-2xl my-3'>Filter by Price</h1>
                <div className='flex justify-between items-center w-[58]'>
                    <input onChange={fromPrice} type="number" placeholder='from' className='border rounded-lg w-20 p-2' value={price.from} />
                    to
                    <input onChange={toPrice} type="number" placeholder='to' className='border rounded-lg w-20 p-2' value={price.to} />
                </div>
            </div>
            {/* filter by Price end  */}

            {/*Filter By Category start*/}
                <div className='mx-2'>
                    <h1 className='text-2xl my-3'>Filter by Category</h1>
                    <Link to={`/shop/`} >
                        <div className={`py-2 border px-4 my-2 rounded-lg cursor-pointer ${slug == undefined ? 'bg-blue-500 text-white' : ''} `}>
                            All Categories
                        </div>
                    </Link>

                    <div>
                        {
                            category.map(
                                (CategoryName,CategoryIndex)=>{
                                    return(
                                        <Link to={`/shop/${CategoryName.slug}`} key={CategoryIndex}>
                                            <div className={`py-2 border px-4 my-2 rounded-lg cursor-pointer ${CategoryName.slug == slug ? 'bg-blue-500 text-white' : ''}`}>
                                            {CategoryName.name}
                                            </div>
                                        </Link>    
                                    )
                                }
                            )
                        }
                        
                        
                    </div>
                </div>
            {/*Filter By Category end*/}
    </>
  )
}
