import React, { useState } from 'react'
import Liftingstateupchild from './Liftingstateupchild'

const LiftingstateupParent = () => {
    let [count,setCount]=useState('')
    let handleCount=(val)=>setCount(parseInt(count+val))

    let handleCount1=(val)=>{
    if(count > 1)
        setCount(parseInt(count-val))
    else 
        setCount(1)
    }
  return (
  <>
    <Liftingstateupchild increase = {handleCount} decrease={handleCount1}/>
    <h1 className="mt-2">{count}</h1>
  </>
  )
}

export default LiftingstateupParent
