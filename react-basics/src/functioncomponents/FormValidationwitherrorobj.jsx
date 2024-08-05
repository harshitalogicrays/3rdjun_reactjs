import React, { useState } from 'react'
import Image1 from '../assets/images/register.png'

const FormValidationwitherrorobj = () => {
    let initialstate ={username:"",email:'',password:'',cpassword:''}
    let [user,setUser]=useState({...initialstate})
    let [errors,setErrors]=useState({unameerr:'',emailerr:''})
    let checkuname=()=>{
        if(user.username==''){
            setErrors((prevErrors)=>({...prevErrors,unameerr:'username is required'}))
            return false
        }
        else {
            setErrors((prevErrors)=>({...prevErrors,unameerr:''}));return true
        }
    }

    let checkemail=()=>{
        let pat = /^[\w\!\#\%\^\&\*\-\.]+\@[\w]+\.[a-zA-Z]{3}$/
        if(user.email==''){
            setErrors((prevErrors)=>({...prevErrors,emailerr:'email is required'}))
            return false
        }
        else if(!pat.test(user.email)){
            setErrors((prevErrors)=>({...prevErrors,emailerr:'Invalid Email'}))
            return false
        }
        else {
            setErrors((prevErrors)=>({...prevErrors,emailerr:''}));return true
        }
       
}

    let handleData=(e)=>{
        e.preventDefault()
        let uname = checkuname()
        let email = checkemail()
        console.log(errors)
        if(uname != true || email !=true){
            e.preventDefault() }
        else 
              alert(JSON.stringify(user))
    }
  return (
    <div className='row shadow p-3 mt-5'>
        <div className="col"> 
            <h1 style={{color:'pink'}}>Register Here</h1>
             <img src={Image1} className='img-fluid'/>    </div>
        <div className="col">
            <form onSubmit={handleData}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Username</label>
                    <input  type="text"  name="username" className="form-control" 
                    value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} onBlur={checkuname}/>
                    {errors.unameerr && <span className='text-danger'>{errors.unameerr}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input  type="text"  name="email" className="form-control" 
                    value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}
                    onBlur={checkemail}/>
                    {errors.emailerr && <span className='text-danger'>{errors.emailerr}</span>}
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
        </div>
    </div>
  )
}

export default FormValidationwitherrorobj
