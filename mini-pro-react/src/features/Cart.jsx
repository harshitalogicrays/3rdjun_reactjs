import React from 'react'
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';
export const Cart = () => {
      
      return (
        <div className="max-w-7xl mx-auto p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="flex-1">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center justify-between py-6 border-b border-gray-200">
                  <div className="flex items-center gap-6">
                    <img src="" alt="" className="w-24 h-24 object-cover rounded-lg" />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">title</h2>
                      <p className="text-gray-600">Price</p>
                      <p className="text-gray-600">Total Price</p>
                      <div className="flex items-center mt-4">
                        <label  className="mr-3 text-gray-700">
                          Quantity:
                        </label>
                        
                        <button className='px-2'>-</button>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          min="1"
                          value="1"
                          className=" border w-8 border-gray-300 rounded-lg text-center"
                        />
                     <button className='px-2'>+</button>
                      </div>
                    </div>
                  </div>
                  <button className="text-red-500 hover:text-red-700">
                    <TrashIcon className="h-6 w-6" />
                  </button>
                </div>
            </div>
          </div>
  
       
          <div className="lg:w-1/3">
            <div className="bg-white shadow-lg p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
              <div className="flex justify-between text-lg mb-4">
                <span className="text-gray-700">Subtotal</span>
                <span className="font-medium text-gray-900">$total</span>
              </div>
              <div className="flex justify-between text-lg mb-4">
              
                <span className="text-gray-700">Shipping</span>
                <span className="font-medium text-gray-900">$5.00</span>
              </div>
              <div className="flex justify-between text-xl font-bold border-t pt-6">
                <span>Total</span>
                 <span className="text-gray-900"></span>            
              </div>
              <div className="flex">
                 <button className="mt-8 w-50 bg-red-600 text-white p-3 rounded-lg text-lg font-medium hover:bg-red-700 me-2 transition duration-200">
                  Empty Cart
                </button>
                   <button className="mt-8 w-50 bg-indigo-600 text-white p-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-200">
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
