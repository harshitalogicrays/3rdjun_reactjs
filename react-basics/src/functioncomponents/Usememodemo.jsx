import React, { useMemo, useState } from 'react'

const Usememodemo = () => {
    let [count,setCount]=useState(0)
    let [item,setItem]=useState(false)

    let handleCounter=()=>{ 
        console.log("handlecounter called")
        setCount(count+1)
    }
    let calculation=(count)=>{
        console.log("Calulation called")
        for(let i=1;i<=1000000000;i++){}
        return count
    }
    // let data = calculation(count)
    let data=useMemo(()=>{return calculation(count)},[count])
  return (
    <div>
      <button type="button" class="btn btn-primary" onClick={handleCounter}> Count </button>
        <h1>{data}</h1>
        <button type="button" class="btn btn-primary" onClick={()=>{console.log("item change");setItem(!item)}}> {item ? 'Hide':'Show'} </button>
    </div>
  )
}

export default Usememodemo
