import React, { useState } from 'react'

const Statedemoinfun = () => {
    // let a =10,b=20,result=0
    // let handleAdd=()=>{
    //     result = a+b }

    // let count=1
    // let handleCount=()=>{
    //  return count++ }

    let [a] = useState(10)
    let [b]=useState(20)
    let [result,setResult]=useState(0)
    let handleAdd=()=>{
            setResult(a+b)
        }
    let [count,setCount]=useState('')
    let handleCount=()=>{
        // setCount(parseInt(count+1)) //count=count+1
        setCount((prev)=>parseInt(prev+1))
    }
    let [isActive,setIsActive]=useState(false)
    let [users,setUsers]=useState([])
    let [student,setStudentData]=useState({name:'',email:'',age:'',courese:''})
  return (
   <>
        <button type="button"  className="btn btn-primary" 
        onClick={handleAdd}> Addition </button>
        <h1>{a}</h1>
        <h1>{b}</h1>
        <h2>Result :{result}</h2>
        <hr/>
        <button type="button"  className="btn btn-primary" 
        onClick={handleCount}> Counter </button>
        <h2>{count}</h2>
   </>
  )
}

export default Statedemoinfun
