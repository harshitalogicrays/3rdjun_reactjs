import React, { useState } from 'react'
import Image1 from '../assets/images/login.jpg'
const Additionwithtextbox = () => {
    let [num1,setNum1]=useState('')
    let [num2,setNum2]=useState('')
    let [result,setResult]=useState(0)
    let handleAdd=(e)=>{
        e.preventDefault()
        setResult(parseInt(num1)+parseInt(num2))
    }
  return (
    <div className='row shadow p-3 mt-5'>
        <div className="col">  <img src={Image1} className='img-fluid'/>    </div>
        <div className="col">
            <form onSubmit={handleAdd}>
                <div class="mb-3">
                    <label for="" class="form-label">Num1</label>
                    <input  type="text"  name="num1" class="form-control" 
                    value={num1} onChange={(e)=>setNum1(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Num2</label>
                    <input  type="text"  name="num2" class="form-control"  onChange={(e)=>setNum2(e.target.value)}
                    value={num2}/>
                </div>
                <button type="submit"  class="btn btn-primary" >Addition  </button>
                <h1>Result - {result}</h1>
            </form>
        </div>
    </div>
  )
}

export default Additionwithtextbox
