import React, { useState } from 'react'
import Image1 from '../assets/images/register.png'
const RegistrationForm1 = () => {
    let [user,setUser]=useState({username:"erwr",email:'wrw',password:'wrwr',cpassword:'wrw',accept:false})
    let handleData=(e)=>{
        e.preventDefault()
        alert(JSON.stringify(user))}
    let handleChange=(e)=>{
        console.log(user)
        setUser({...user ,  [e.target.name] :e.target.value})}
  return (
    <div className='row shadow p-3 mt-5'>
        <div className="col"> 
            <h1>Register Here</h1>
             <img src={Image1} className='img-fluid'/>    </div>
        <div className="col">
            <form onSubmit={handleData}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Username</label>
                    <input  type="text"  name="username" className="form-control" 
                    value={user.username} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input  type="text"  name="email" className="form-control" 
                    value={user.email} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">password</label>
                    <input  type="password"  name="password" className="form-control" 
                    value={user.password} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Confirm Password</label>
                    <input  type="password"  name="cpassword" className="form-control"
                    value={user.cpassword} onChange={handleChange}/>
                </div>
                <div className="form-check form-check-inline mb-3">
                    <input className="form-check-input" type="checkbox" name="accept" 
                    onClick={handleChange}
                    checked={user.accept}                  
                    />
                    <label className="form-check-label" htmlFor="">
                    I accept T&C 
                      
                       </label>
                </div><br/>
               <button type="submit"  className="btn btn-primary" >Submit  </button>
           </form>
        </div>
    </div>
  )
}

export default RegistrationForm1
