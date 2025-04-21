import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Context/MainContext';
import { Link } from 'react-router-dom';

export default function Cart() {
    const {cart,setcart,toast} = useContext(Context);
    const[totalPrice,setTotalPrice] = useState(0);

    const getTotalPrice = ()=>{
      let total = 0;
      cart.forEach(
        (cartData,cartIndex)=>{
          total = total +(cartData.price * cartData.qty)
        }
      );
      setTotalPrice(total);
    }
    useEffect(
      ()=>{
        getTotalPrice();
      },[cart]
    )


  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
      {/* Left Side: Cart Items */}
      <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
        <div className="space-y-4">
            {
                cart.length == 0 ?
                <div className="flex flex-col items-center justify-center h-96 text-center">
                    <span className="text-6xl">😢🛒</span> {/* Crying + Shopping Cart Emoji */}
                    <h2 className="text-2xl font-semibold mt-4">Oh no! Your Cart is Empty</h2>
                    <p className="text-gray-600 mt-2">Looks like you haven’t added anything yet.</p>
                    <Link to={`/shop`}>
                        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        🛍️ Start Shopping
                        </button>
                    </Link>
                </div>

                :

                cart.map(
                    (cartData,cartIndex)=>{
                        return(
                            <CartRow  key={cartIndex} cartData={cartData} cartIndex={cartIndex} cart={cart} setcart={setcart} toast={toast}/>
                        )
                    }
                )
            }
        </div>
      </div>
      {/* Right Side: Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Tax</span>
          <span>${(totalPrice*10/100).toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg border-t pt-2">
          <span>Total</span>
          <span>${(totalPrice + (totalPrice*10/100)).toFixed(2)}</span>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600 transition duration-200">
          Checkout
        </button>
      </div>
    </div>
  );
}

function CartRow({cartData,cartIndex,cart,setcart,toast}) {

    const qtyChange = (event,index)=>{
      const newQty = event.target.value;
      if(newQty>0){
        const oldCart = [...cart]
        oldCart[index].qty = newQty;
        setcart(oldCart)
      } 
    }
    const deleteCartItem = (indexNum)=>{
        const oldData =[...cart];
        oldData.splice(indexNum,1);
        setcart(oldData)
        toast.success("Item is Deleted")
        // console.log(indexNum)
    }
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between border my-2 p-4 rounded-lg bg-gray-50">
      <img
        src={cartData.thumbnail}
        alt="Product"
        className="w-20 h-20 rounded object-cover"
      />
      <div className="flex-1 mt-2 sm:mt-0 sm:ml-4 text-center sm:text-left">
        <Link to={`/productdetail/${cartData.id}`}>
          <h3 className="font-semibold">{cartData.title}</h3>
        </Link>
        <p className="text-sm text-gray-600">Category: {cartData.category}</p>
        <p className="text-sm text-gray-600">Price: ${cartData.price}</p>
        <div className="mt-2 flex justify-center sm:justify-start items-center">
          <label htmlFor="qty" className="mr-2 text-sm">
            Qty:
          </label>
          <input
            type="number"
            id="qty"
            value={cartData.qty}
            className="w-12 px-2 py-1 border rounded text-center"
            onChange={(event)=> qtyChange(event,cartIndex)}
          />
        </div>
      </div>
      <button onClick={() => deleteCartItem(cartIndex)} className="text-red-500 hover:text-red-700 mt-2 sm:mt-0">Remove</button>
    </div>
  );
}
