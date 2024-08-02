import React, { useState } from 'react'
import allproducts from '../assets/listofproducts.js'
import ProductList from './ProductList.jsx'
const Products = () => {
    let [products]=useState(allproducts)
  return (
  <>
    <ProductList products={products}/>
  </>
  )
}

export default Products
