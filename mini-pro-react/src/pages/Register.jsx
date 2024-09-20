import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {
  const navigate =useNavigate()
  const {register,trigger,handleSubmit,getValues,formState:{errors}}=useForm()
  let handleData=async()=>{
    let data =getValues()
    try{
      // await fetch("http://localhost:3000/users",{
      //   method:"POST",
      //   headers:{'content-type':'application/json'},
      //   body:JSON.stringify({...data,role:1,createdAt:new Date()})
      // })
      
      await axios.post("http://localhost:3000/users",{...data,role:1,createdAt:new Date()})
      toast.success("registered successfully")
      navigate('/login')
    }
    catch(error){
      toast.error(error.message)
    }
  }
  return (
    <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-3 text-center text-2xl font-bold leading-3 tracking-tight">  Sign Up   </h2>  </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form  method="POST" className="space-y-6" onSubmit={handleSubmit(handleData)}
          noValidate>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-3 ">
                Username </label>
              <div className="mt-2">
                <input name="username"  type="text"  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" {...register('username',{required:"username is required"})}
                onBlur={()=>trigger('username')}/>
                {errors.username && <span className='text-red-700'>{errors.username.message}</span>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-3 ">
                Email address </label>
              <div className="mt-2">
                <input name="email"  type="email"  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register('email',{required:"email is required"})}
                onBlur={()=>trigger('email')}/>
                {errors.email && <span className='text-red-700'>{errors.email.message}</span>}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-3 ">
                Password </label>
              <div className="mt-2">
                <input name="password"  type="password"  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" {...register('password',{required:"password is required"})}
                onBlur={()=>trigger('password')}
                />
                {errors.password && <span className='text-red-700'>{errors.password.message}</span>}
             
              </div>
            </div>

            <div>
              <label htmlFor="cpassword" className="block text-sm font-medium leading-3 ">
                Confirm Password </label>
              <div className="mt-2">
                <input name="cpassword"  type="password"  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" {...register('cpassword',{required:"cpassword is required"})}
                onBlur={()=>trigger('cpassword')}
                />
                {errors.cpassword && <span className='text-red-700'>{errors.cpassword.message}</span>}
             
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-2 text-center text-sm text-gray-500">
          Already an Account??{' '}
            <Link to='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
             Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register
