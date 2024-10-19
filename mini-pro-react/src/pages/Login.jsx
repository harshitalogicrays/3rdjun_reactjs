import React, { useState } from 'react'
import { Link, useNavigate,useLocation } from 'react-router-dom'
import Loader from '../features/Loader'
import { toast } from 'react-toastify'
import axios from 'axios'

const Login = () => {
  const loc = useLocation()
  console.log(loc)
  let [email,setEmail]=useState('')
  let [password,setPassword]=useState('')
  let [isLoading,setIsLoading]=useState(false)
  const navigate = useNavigate()
  let handleSubmit=async(e)=>{
    e.preventDefault()
    setIsLoading(true)
    try{  
       /*let res =  await fetch(`http://localhost:3000/users?email=${email}`)
       let data =await res.json()
       if(data.length==0){toast.error("Invalid Credentials")}
       else{
          if(data[0].password == password){
            toast.success("loggedIn successfully")
            navigate('/')
          }
          else toast.error("Invalid Credentials") 
       }      */

      let res  = await axios.get(`http://localhost:3000/users?email=${email}`)
      // console.log(res)
      if(res.data.length==0){toast.error("Invalid Credentials")}
      else{
         if(res.data[0].password == password){
          let obj = {email:email,name:res.data[0].username,isLoggedIn:true,role:1}
          sessionStorage.setItem("3rdjunlogin",JSON.stringify(obj))
           toast.success("loggedIn successfully")
           let redirectTo = loc.state ? loc.state.from :'/'
           navigate(redirectTo)
         }
         else toast.error("Invalid Credentials") 
      } 

      setIsLoading(false)
    }
    catch(error){
      toast.error(error.message)
      setIsLoading(false)
    }
  }
  return (
    <>
    {isLoading && <Loader/>}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-3 text-center text-2xl font-bold leading-3 tracking-tight ">  Sign In  </h2>  </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-3 ">
                Email address </label>
              <div className="mt-2">
                <input name="email"  type="email"  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={email} onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-3 ">
                Password </label>
              <div className="mt-2">
                <input name="password"  type="password"  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  value={password} onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign In
              </button>
            </div>
          </form>

          <p className="mt-2 text-center text-sm text-gray-500">
          Create an Account??{' '}
            <Link to='/register' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
             Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
