import React, { useRef, useState } from 'react'
import Refchildren from './Refchildren'
import RefChildren1 from './RefChildren1'

const RefDemoinfun = () => {
    let [data,setData]=useState("aaa")
    let myRef=useRef()
    let ref1=useRef()
    let handleDecrease=()=>{
        ref1.current.value > 1 ? ref1.current.value-- : ref1.current.value=1
    }
  return (
    <div className="container mt-5 col-6">
        <input type="text" className="form-control mb-3" ref={myRef} defaultValue="Ram"/>
        <button type="button" className='btn btn-primary me-3' onClick={()=>alert(myRef.current.value)}>Fetch Data</button>
        <Refchildren username={data} innerRef ={myRef}/><hr/>

<div className="row"> <div className="col-4">
    <div className="input-group">
    <button type="button" className='btn btn-primary' onClick={handleDecrease}>-</button>
        <RefChildren1 username={data}  ref={ref1}/>
        <button type="button" className='btn btn-primary' onClick={()=>ref1.current.value++}>+</button>
        </div>
    </div>
</div>

    </div>
  )
}

export default RefDemoinfun
