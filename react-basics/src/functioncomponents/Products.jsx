import React, { useEffect, useState } from 'react'
// import allproducts from '../assets/listofproducts.js'
import ProductList from './ProductList.jsx'
import axios from 'axios'
const Products = () => {
    // let [products]=useState(allproducts)
    let [products,setProducts]=useState([])
    useEffect(()=>{getProducts()},[])

    let getProducts=async()=>{
      // try{
      //     let res =  await fetch("https://dummyjson.com/products")
      //     let data = await res.json()
      //     console.log(data)
      //     setProducts(data.products)
      //     }
      //     catch(err){console.log(err)}

      try{
        let res =  await axios.get("https://dummyjson.com/products")
         console.log(res)
        setProducts(res.data.products)
        }
        catch(err){console.log(err)}
          }
          return (
  <>
    <ProductList products={products}/>
  </>
  )
}

export default Products
