import React, { Fragment } from 'react'

const EventDemoinfun = () => {
    let handleClick=()=>{
        alert("handleclick called")
    }
    let handleClick1=(a,b)=>{
        alert(a+b)
    }
  return (
    <Fragment>
        <button type="button" className="btn btn-primary me-3"
        onClick={()=>alert('Button clicked')}> Click Me  </button>
        
        <button type="button" className="btn btn-primary me-3"
        onClick={handleClick}>  Click Me </button>

        <button type="button" className="btn btn-primary me-2"
        onClick={()=>handleClick()}>  Click Me </button>

    <button type="button" className="btn btn-primary me-2"
        onClick={()=>handleClick1(2,3)}>  Click Me </button>
    </Fragment>
  )
}

export default EventDemoinfun
