import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useMyContext } from './contextdemo';
import { toast } from 'react-toastify';
export const Cart = () => {
      const location  = useLocation();
      // console.log(location)
    const navigate = useNavigate()
      const data = useMyContext()
      let {cartItems,total,increase,decrease,removefromcart,emptycart,calculate_total} = data
      useEffect(()=>{
        calculate_total()
      },[cartItems])
      let handleCheckout=async()=>{
        if(sessionStorage.getItem("3rdjunlogin")==null){
          navigate('/login',{state:{from:location.pathname}})
        }
        else {
          if(cartItems.length !=0){
            let obj= {cartItems,total,orderstatus:'placed',orderDate:new Date().toLocaleDateString(),
              orderTime:new Date().toLocaleTimeString()
            }
              try{
                await fetch("http://localhost:3000/orders",{
                  method:"POST",
                  headers:{'content-type':'application/json'},
                  body:JSON.stringify(obj)
                })
                toast.success("order placed")
                emptycart()
                navigate('/')
              }
              catch(err){toast.error(err.message)}
          }
        }
      
      }
      return (
        <div className="max-w-7xl mx-auto p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row gap-12">
          {cartItems.length==0  && <h1>No product found</h1>}
          <div className="flex-1">
          {cartItems.map((item,i)=>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center justify-between py-6 border-b border-gray-200">
                  <div className="flex items-center gap-6">
                    <img src={item.images[0]} alt="" className="w-24 h-24 object-cover rounded-lg" />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                      <p className="text-gray-600">&#8377;{item.price}</p>
                      <p className="text-gray-600">Total Price : &#8377;{Number(item.price * item.qty).toFixed(2)}</p>
                      <div className="flex items-center mt-4">
                        <label  className="mr-3 text-gray-700">
                          Quantity:
                        </label>
                        
                        <button className='px-2' onClick={()=>decrease(item)}>-</button>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          min="1"
                          value={item.qty}
                          className=" border w-8 border-gray-300 rounded-lg text-center"
                        />
                     <button className='px-2' onClick={()=>increase(item)}>+</button>
                      </div>
                    </div>
                  </div>
                  <button className="text-red-500 hover:text-red-700"  
                  onClick={()=>removefromcart(item.id)}>
                    <TrashIcon className="h-6 w-6" />
                  </button>
                </div>
            </div>
                )}
          </div>
     
       
          <div className="lg:w-1/3">
            <div className="bg-white shadow-lg p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
              <div className="flex justify-between text-lg mb-4">
                <span className="text-gray-700">Subtotal</span>
                <span className="font-medium text-gray-900">&#8377;{Number(total).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg mb-4">
              
                <span className="text-gray-700">Shipping</span>
                <span className="font-medium text-gray-900">{(total < 20  && total !=0) ? <>&#8377;5.00</> :<>&#8377;0.00</> }</span>
              </div>
              <div className="flex justify-between text-xl font-bold border-t pt-6">
                <span>Total</span>
                 <span className="text-gray-900">&#8377;{(total < 20  && total !=0) ?<>{Number(total+5.00).toFixed(2)}</> : <>{Number(total).toFixed(2)}</>}</span>            
              </div>
              <div className="flex">
                 <button className="mt-8 w-50 bg-red-600 text-white p-3 rounded-lg text-lg font-medium hover:bg-red-700 me-2 transition duration-200"
                 onClick={()=>emptycart()}>
                  Empty Cart
                </button>
                   <button className="mt-8 w-50 bg-indigo-600 text-white p-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-200" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
  )
}

export default Cart
