import React from 'react'
import Image1 from '../assets/images/register.png'
const ReactHookForm = () => {
 return (
    <>
                <h1>React Hook Form</h1> <hr/>

    <div className='row shadow p-3 mt-5'>
        <div className="col"> 

             <img src={Image1} className='img-fluid'/>    </div>
        <div className="col">
            <form>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Username</label>
                    <input  type="text"  name="username" className="form-control" 
                  />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input  type="text"  name="email" className="form-control" 
                   />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">password</label>
                    <input  type="password"  name="password" className="form-control" 
                   />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Confirm Password</label>
                    <input  type="password"  name="cpassword" className="form-control"
                   />
                </div>
               <button type="submit"  className="btn btn-primary" >Submit  </button>
           </form>
        </div>
    </div>    </>
  )
}

export default ReactHookForm
