import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useMyContext } from './contextdemo'
import Loader from './Loader'

const Products = () => {
  const data =useMyContext()
  const [products,setProducts]=useState([])
  let getProducts=async()=>{
    try{
        let res = await fetch('https://dummyjson.com/products')
        let data = await res.json()
        // console.log(data.products)
        setProducts(data.products)
        // toast.success("data found ")
    }
    catch(err){
        // console.log(err.message)
        toast.error(err.message)
    }
  }
  useEffect(()=>{getProducts()},[])

  let handleCart=(product)=>{
    data.addtocart(product)
  }
  return (
    <div>
    <div className="mx-auto max-w-2xl px-2 py-1 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-2">
      <h2 className="text-2xl font-bold tracking-tight">Products</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.length==0 && <Loader/>}
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                alt={product.title}
                src={product.images[0]}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm">
                     <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                </h3>
                <p className="mt-1 text-sm ">{product.category}</p>
                <p className="text-sm">Available: {product.stock}</p>
              </div>
              <p className="text-sm font-medium">&#8377;{product.price}</p>
           
            </div>
            <button type="button" className=' relative border-2  border-red-800 text-yellow-300 bg-black rounded-2xl py-1 px-2 mt-1 shadow-lg shadow-slate-700 hover:bg-gray-800
            hover:text-white hover:border-cyan-800'
            onClick={()=>handleCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Products
