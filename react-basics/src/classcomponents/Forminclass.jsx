import React, { Component } from 'react'
import Image1 from '../assets/images/register.png'
export default class Forminclass extends Component {
    constructor(props) {
      super(props)
      this.state = { user:{username:"",email:'',password:'',cpassword:''},
    errors:{unameerr:'',emailerr:''} }
    }
     handleChange=(e)=>{
        this.setState({
            user:{...this.state.user,[e.target.name]:e.target.value}
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        alert(JSON.stringify(this.state.user))}
        
        checkuname=()=>{
            if(this.state.user.username==''){
                this.setState({
                    errors:(prevErrors)=>({...prevErrors,unameerr:'username is required'})   })
                return false }
            else {
                this.setState({
                    errors:(prevErrors)=>({...prevErrors,unameerr:''})
                });return true
            }  }
    
  render() {
    return (
        <div className='row shadow p-3 mt-5'>
        <div className="col"> 
            <h1 style={{color:'pink'}}>Register Here</h1>
             <img src={Image1} className='img-fluid'/>    </div>
        <div className="col">
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Username</label>
                    <input  type="text"  name="username" className="form-control" 
                    value={this.state.user.username} onChange={this.handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input  type="text"  name="email" className="form-control" 
                  value={this.state.user.email} onChange={this.handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">password</label>
                    <input  type="password"  name="password" className="form-control" 
                  value={this.state.user.password} onChange={this.handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Confirm Password</label>
                    <input  type="password"  name="cpassword" className="form-control"
                   value={this.state.user.cpassword} onChange={this.handleChange}/>
                </div>
               <button type="submit"  className="btn btn-primary" >Submit  </button>
           </form>
        </div>
    </div>
    )
  }
}
