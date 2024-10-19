import React from 'react'
import ProductCard from './ProductCard'
import { Row } from 'react-bootstrap'

const ProductList = ({products}) => {
  return (
   <>
    {products.length==0 && <h1>No product Found</h1>}
    <Row>
        {products.map((product,i)=><ProductCard key={i} product={product}/>)}
    </Row>
   </>
  )
}

export default ProductList
