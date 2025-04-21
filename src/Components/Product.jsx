import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Context } from '../Context/MainContext';
import { Link } from 'react-router-dom';

export default function Product({slug,rating,price}) {
 
    const {cart,setcart,toast} = useContext(Context);
    const [product,setproduct] = useState([]);
    const [loading,setloading] = useState(false);
    const [limit,setlimit] = useState(15);
    
    const getproduct = ()=>{

        let ProductApi ;

        if(slug == undefined){
            ProductApi = `https://dummyjson.com/products?limit=${limit}`
        }
        else{
            ProductApi = `https://dummyjson.com/products/category/${slug}?limit=${limit}`
        }
        axios.get(ProductApi).then(
            (success)=>{
                const finalData = success.data.products.filter(
                    (productData,productIndex)=>{
                        if(productData.rating >= rating && productData.price >= price.from && productData.price <= price.to ){
                            return true
                        }
                    }
                )
                setproduct(finalData)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    useEffect(
        ()=>{
            setloading(true)
            setTimeout(() => {
                setloading(false)
            }, 1000);
            getproduct();
        },[slug,limit,rating,price]
    )
    
  return (
   <>
    <h2 className='ms-5 mt-3'>Toal Products: {product.length}</h2>
    <main className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {
            product.map(
                (ProductData,ProductIndex)=>{
                    return loading == true ? (
                        <div className="max-w-sm w-full p-4 border border-gray-200 rounded-2xl shadow-md bg-white animate-pulse">
                            <div className="h-40 bg-gray-300 rounded-lg"></div>
                            <div className="mt-4 space-y-3">
                                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-300 rounded w-full"></div>
                                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div className="h-10 bg-gray-300 rounded w-1/3"></div>
                                <div className="h-10 bg-gray-300 rounded w-1/4"></div>
                            </div>
                        </div>
                    )
                    :
                    (
                            <ProductCard  ProductData={ProductData}  cart={cart} setcart={setcart} toast={toast}/>
                    )
                }
            )
        }
        

    </main>
    <div className='text-center'>
        <button onClick={()=> setlimit(limit+6)} className='mt-4 mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 '>Load More</button>
    </div>    




  
   </>
  )
}


function ProductCard({ProductData,cart,setcart,toast}){
    const addToCart = ()=>{
        const {id,title,price,category,thumbnail} = ProductData;
        const ProductDetail = {id,title,price,category,thumbnail,qty:1};

        const matchCartData = cart.filter(
            (cartData,cartIndex)=>{
                return cartData.id == ProductDetail.id
                // console.log(cartData.id)
            }
        )
        
        if(matchCartData.length == 0 ){

            const finalData = [...cart,ProductDetail]
            setcart(finalData);
            toast.success("Prodct Addaed In Cart")
        }
        else{
            toast.error("Product alreday in cart")
        }

       

    }
    return(
        <div className="w-full max-w-sm mx-auto p-4 bg-white rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <Link to={`/productdetail/${ProductData.id}`} className="block">
                <img
                    src={ProductData.thumbnail}
                    alt="Product Image"
                    className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2">{ProductData.title}</h2>
                    <p className="text-gray-600 text-sm mb-2">
                        {`${ProductData.description.slice(0, 80)}... `}
                        <span className="text-blue-600 font-semibold">
                            Read More
                        </span>
                    </p>
                    <p className="text-sm text-gray-500 mb-2"> Category : <span className="font-bold capitalize">Electronics</span></p>
                    <p className="text-sm text-yellow-500 mb-4">⭐ {ProductData.rating}/5</p>
                </div>
            </Link>
            <div className="flex items-center justify-between px-4 pb-4">
                <span className="text-xl font-bold text-blue-600">${ProductData.price}</span>
                <button 
                    onClick={addToCart} 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}