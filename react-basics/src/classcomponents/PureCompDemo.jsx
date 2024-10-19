import React, { Component, createRef, PureComponent } from 'react'

export default class PureCompDemo extends PureComponent {
    constructor(props) {
        console.log("constructor called")
        super(props)
        this.state = {address:'pune' }
        this.focusRef=createRef()
      }
      changeAddress=()=>{
        console.log("changeAddress called")
        this.setState({address:  this.focusRef.current.value})
      }
      render() {
        console.log("render called")
        return (
          <div>
            <button  type="button" class="btn btn-primary" onClick={this.changeAddress}
            >Change Address </button>
            
            <h1>{this.state.address}</h1>
            <input type="text" className="form-control" ref={this.focusRef}/>
          </div>
        )
      }
    
}
