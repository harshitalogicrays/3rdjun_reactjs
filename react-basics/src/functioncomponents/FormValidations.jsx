import React, { useEffect, useState } from 'react'
import Image1 from '../assets/images/register.png'
const FormValidations = () => {
    let initialstate ={username:"",email:'',password:'',cpassword:''}
    let [user,setUser]=useState({...initialstate})
    let [unameerr,setUnameerr]=useState('')
    let [emailerr,setEmailerr]=useState('')
    let focusRef = React.useRef()
    let checkuname=()=>{
            if(user.username==''){
                setUnameerr("username is required");return false
            }
            else { setUnameerr("");return true }
    }

    let checkemail=()=>{
        let pat = /^[\w\!\#\%\^\&\*\-\.]+\@[\w]+\.[a-zA-Z]{3}$/
        if(user.email==''){
            setEmailerr("email is required");return false
        }
        else if(!pat.test(user.email)){
            setEmailerr("invalid email");return false
        }
        else { setEmailerr("");return true   }
}

    let handleData=(e)=>{
        e.preventDefault()
        let uname = checkuname()
        let email = checkemail()
        if(uname != true || email !=true){
            e.preventDefault() }
        else 
              alert(JSON.stringify(user))}

    useEffect(()=>{
        focusRef.current.focus()
    },[])
    useEffect(()=>{
        focusRef.current.style.color='orange'
    },[user.username])

  return (
    <div className='row shadow p-3 mt-5'>
        <div className="col"> 
            <h1 style={{color:'pink'}}>Register Here</h1>
             <img src={Image1} className='img-fluid'/>    </div>
        <div className="col">
            <form onSubmit={handleData}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Username</label>
                    <input  type="text"  name="username" className="form-control"  ref={focusRef}
                    value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} onBlur={checkuname}/>
                    {unameerr && <span className='text-danger'>{unameerr}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input  type="text"  name="email" className="form-control" 
                    value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}
                    onBlur={checkemail}/>
                      {emailerr && <span className='text-danger'>{emailerr}</span>}
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

export default FormValidations
