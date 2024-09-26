import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_USER } from '../redux/userSlice'

const AddUser = () => {
    let [user,setUser]=useState({username:"",email:'',password:'',cpassword:''})

    const dispatch = useDispatch() //to dispatch an action

    let handleData=(e)=>{
        e.preventDefault()
        dispatch(ADD_USER(user))    
        setUser({username:"",email:'',password:'',cpassword:''})
    }

  return (
    <>
    <h1>Add User</h1><hr/>
    <form onSubmit={handleData}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Username</label>
                    <input  type="text"  name="username" className="form-control" 
                    value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input  type="text"  name="email" className="form-control" 
                    value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">password</label>
                    <input  type="password"  name="password" className="form-control" 
                    value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Confirm Password</label>
                    <input  type="password"  name="cpassword" className="form-control"
                    value={user.cpassword} onChange={(e)=>setUser({...user,cpassword:e.target.value})}/>
                </div>
               <button type="submit"  className="btn btn-primary" >Submit  </button>
           </form>
    
    </>
  )
}

export default AddUser
