import React from 'react'

const Refchildren = (props) => {
  return (
    <button
        type="button"
        class="btn btn-primary" 
        onClick={()=>props.innerRef.current.focus()}  >
        focus
    </button>
    
  )
}

export default Refchildren
