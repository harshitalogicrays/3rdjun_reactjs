import React, { useEffect, useState } from 'react'

const Home = () => {
  // let [isActive]=useState(false)
  // if(!isActive){return new Error()}

  let [users,setUsers]=useState([])
  // let getData=()=>{
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res)=>{
  //     return res.json().then((data)=>{
  //       console.log(data)
  //       setUsers(data)
  //     })
  //   })
  //   .catch((err)=>console.log(err))
  // }

  let getData=async()=>{
    try{
     let res =  await fetch("https://jsonplaceholder.typicode.com/users")
     let data = await res.json()
     console.log(data)
     setUsers(data)
    }
    catch(err){console.log(err)}
  }

  useEffect(()=>{ getData()},[])
  return (
    <>
    <h1>Home Page</h1>
    {users.length==0 && <h1>No user Found</h1>}
    {/* {users.map((user,i)=><p>{JSON.stringify(user)}</p>)} */}
    {users.map((user,i)=><p>{user.name}</p>)}
    </>
  )
}

export default Home
