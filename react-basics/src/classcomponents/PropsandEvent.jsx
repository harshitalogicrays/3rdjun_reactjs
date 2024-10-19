import React, { Component } from 'react'
import PropTypes from 'prop-types'; 
export default class PropsandEvent extends Component {
    handleClick=()=>{
        alert("handleclick called")
    }
  render() {
    return (
    <>
        <h1>{this.props.username}</h1>
        <h2>{this.props.isActive ? <>Yes She is Active</> :<> No She is Not Active</>}</h2>
        {/* {this.props.hobbies.map((h,i)=><h5 key={i}>{h}</h5>)} */}
        {this.props.hobbies.map((h,i)=>{return <h5 key={i}>{h}</h5>})}
        {this.props.children}
        <button
            type="button"
            class="btn btn-primary" onClick={()=>alert("buttobn clicked")}
        >
            Button
        </button>

        <button type="button" className="btn btn-primary ms-3"
        onClick={this.handleClick}>  Click Me </button>
        
    </>
    )
  }
}

PropsandEvent.defaultProps={
    hobbies:[],username:'aaa',isActive:false
}

PropsandEvent.propTypes  ={
    username:PropTypes.string,
    hobbies:PropTypes.array
}