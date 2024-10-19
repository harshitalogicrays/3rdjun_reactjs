import React, { Fragment, useState } from 'react'
import allproducts from '../assets/listofproducts.js'
const ListRendering = () => {
    // let names = ['smit','darshan','umang','harsh','krutik','sahil']
    // let result = names.map((item,i)=><Fragment key={i}>{item}{'   '}</Fragment>)
    let [products,setProducts]=useState(allproducts)
  return (
   <>
    {/* {names} */}

    {/* {names.map((item,i)=><h1 key={i}>{item}</h1>)} */}

    {/* {names.map((item,i)=>{return <h1 key={i}>{item}</h1>})} */}

      {/* {names.map((item,i)=><Fragment key={i}>{item}{'   '}</Fragment>)} */}

    {/* {result} */}

    {/* {products.map((product)=><p key={product.id}>{JSON.stringify(product)}</p>)} */}

    <div class="table-responsive mt-5" >
      <table class="table table-bordered table-striped table-hover"  >
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Category</th>
            <th>price</th>
            <th>stock</th>
          </tr>
        </thead>
        <tbody>
          {products.length==0 && <tr><td colSpan={7} className='text-center'>No product found</td></tr>}
          {/* {products.map((product,i)=>
            <tr key={i}>
              <td>{i+1}</td>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td><img src={product.image} height={50} width={50}/></td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
        )} */}
         {/* {products.map((product,i)=>{
          return  <tr key={i}>
              <td>{i+1}</td>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td><img src={product.image} height={50} width={50}/></td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
         }
        )} */}
          {products.map((product,i)=>{
            let {id,name,image,price,category,stock}=product
          return  <tr key={i}>
              <td>{i+1}</td>
              <td>{id}</td>
              <td>{name}</td>
              <td><img src={image} height={50} width={50}/></td>
              <td>{category}</td>
              <td>{price}</td>
              <td>{stock}</td>
            </tr>
         }
        )}
        </tbody>
      </table>
    </div>
    
   </>
  )
}

export default ListRendering
