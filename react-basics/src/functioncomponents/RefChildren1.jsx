import React from 'react'

const RefChildren1 = React.forwardRef((props,ref)=>{
    return (
       <>
         <input type="text" className='form-control' ref={ref} defaultValue="0" style={{width:'40px',textAlign:'center'}}/>
       </>
      )
})

export default RefChildren1
