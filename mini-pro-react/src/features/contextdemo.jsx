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
        else {
            toast.info(`${product.title} already added to cart`)
        }
        
    }
    const increase=()=>{}
    const decrease=()=>{}
    const removefromcart=()=>{}
    const emptycart=()=>{}
    const calculate_total=()=>{}
  return (
    <mycontext.Provider value={{cartItems,total,addtocart,increase,decrease,removefromcart,emptycart,calculate_total}}>
        {children}
    </mycontext.Provider>
  )
}

export default Contextdemo

export const useMyContext =()=>useContext(mycontext)