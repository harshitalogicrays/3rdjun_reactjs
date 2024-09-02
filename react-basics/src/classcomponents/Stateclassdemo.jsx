import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Stateclassdemo extends Component {
constructor(props) {
  super(props)
  this.state = {username:'Ram',address:this.props.contact,count:''}
}

handleChange=()=>{
    this.setState({address:"ahmedabad"})
}
  render() {
    return (
      <div>
        {this.state.username}<br/>
        
        <Button type="button" variant="primary" 
        onClick={this.handleChange}>Change Address</Button> <br/>
        {this.state.address}
        <hr/>
        <Button type="button" variant="primary" 
        onClick={()=>this.setState({count:parseInt(this.state.count + 1)})}>Counter</Button> <br/>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}
