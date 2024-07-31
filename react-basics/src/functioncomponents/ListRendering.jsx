import React, { Fragment } from 'react'

const ListRendering = () => {
    let names = ['smit','darshan','umang','harsh','krutik','sahil']
    let result = names.map((item,i)=><Fragment key={i}>{item}{'   '}</Fragment>)
  return (
   <>
    {/* {names} */}

    {/* {names.map((item,i)=><h1 key={i}>{item}</h1>)} */}

    {/* {names.map((item,i)=>{return <h1 key={i}>{item}</h1>})} */}

      {/* {names.map((item,i)=><Fragment key={i}>{item}{'   '}</Fragment>)} */}

    {result}
   </>
  )
}

export default ListRendering
