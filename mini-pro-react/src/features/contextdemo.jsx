import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'

export const mycontext = React.createContext() 
const Contextdemo = ({children}) => {
    const [cartItems,setCartItems]=useState([])
    const [total,setTotal]=useState(0)
    const addtocart=(product)=>{ 
        // console.log("add to cart called",product)
        console.log(cartItems)
        const ItemIndex = cartItems.findIndex(item=>item.id==product.id)
        if(ItemIndex==-1){
            setCartItems([...cartItems , {...product,qty:1}])
            toast.success(`${product.title} added to cart`)
        }
        else { toast.info(`${product.title} already added to cart`)   }      
    }
    
    const increase=(product)=>{
        const ItemIndex = cartItems.findIndex(item=>item.id==product.id)
        if(ItemIndex !=-1){
            if( cartItems[ItemIndex].qty < product.stock)
                cartItems[ItemIndex].qty++
            else 
                toast.info(`only ${product.stock} qty available`)}
        setCartItems([...cartItems]) }

    const decrease=(product)=>{
        const ItemIndex = cartItems.findIndex(item=>item.id==product.id)
        if(ItemIndex !=-1){
            if( cartItems[ItemIndex].qty > 1)
                cartItems[ItemIndex].qty--
            else 
            cartItems[ItemIndex].qty = 1
        }
        setCartItems([...cartItems])
    }
    const removefromcart=(id)=>{
        // const ItemIndex = cartItems.findIndex(item=>item.id==id)
        // cartItems.splice(ItemIndex,1)
        // setCartItems([...cartItems])

        const filters = cartItems.filter(item=>item.id !=id)
        setCartItems([...filters])
    }
    const emptycart=()=>{
        setCartItems([])
        setTotal(0)
    }
    const calculate_total=()=>{
        let t = cartItems.reduce((prev,curr)=>{return prev+(curr.price*curr.qty)},0)
        setTotal(t)
    }
  return (
    <mycontext.Provider value={{cartItems,total,addtocart,increase,decrease,removefromcart,emptycart,calculate_total}}>
        {children}
    </mycontext.Provider>
  )
}

export default Contextdemo

export const useMyContext =()=>useContext(mycontext)

