import React, { Component, createRef } from 'react'
import Errorboundarydemo from './errorboundarydemo'
import ErrorBoundary from './ErrorBoundary'

export default class LifeCycleMethods extends Component {
  constructor(props) {
    console.log("constructor called")
    super(props)
    this.state = {address:'pune' }
    this.focusRef=createRef()
    this.timer=''
  }
  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps called")
    // if(props.contact != state.address){
    //   state.address = props.contact
      return {state}
    // }
    // else return  null
  }
  componentDidMount(){
    console.log("componentDidMount called")
    this.focusRef.current.focus()
    this.timer =setInterval(() => {
        console.log("setinterval called")
    }, 1000);
  }

  changeAddress=()=>{
    console.log("changeAddress called")
    this.setState({address:  this.focusRef.current.value})
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate called")
    if(this.state.address != nextState.address)
     return true
    else return false
  }
  componentDidUpdate(){ 
    console.log("componentDidUpdate called")
  }
  componentWillUnmount(){
    clearInterval(this.timer)
    console.log("componentWillUnmount called")
  }
  render() {
    console.log("render called")
    return (
      <div>
        <button  type="button" class="btn btn-primary" onClick={this.changeAddress}
        >Change Address </button>
        
        <h1>{this.state.address}</h1>
        <input type="text" className="form-control" ref={this.focusRef}/><hr/>

        
            <Errorboundarydemo name="ram"/>
            <Errorboundarydemo name="riya"/>
            <Errorboundarydemo name="pavan"/>
            <ErrorBoundary fallback="bad request">
               <Errorboundarydemo name="meera"/>
            </ErrorBoundary>

     
      </div>
    )
  }


}
