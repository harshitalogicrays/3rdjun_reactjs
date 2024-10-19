import React, { Component } from 'react'

export default class Errorboundarydemo extends Component {
  
  render() {
    if(this.props.name=="meera"){
       throw new Error('Something went wrong') }
    else 
    return ( <div> {this.props.name} </div>
    )   
  }
}
