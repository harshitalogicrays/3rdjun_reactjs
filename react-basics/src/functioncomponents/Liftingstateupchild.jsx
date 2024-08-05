import React from 'react'

const Liftingstateupchild = ({increase,decrease}) => {
    console.log(increase)
  return (
    <>
        <button type="button"  class="btn btn-primary me-2" onClick={()=>increase(1)} > Increase by 1 </button>
        <button type="button"  class="btn btn-primary me-3" onClick={()=>increase(5)}  > Increase by 5 </button>

        <button type="button"  class="btn btn-primary me-2" onClick={()=>decrease(1)}> Decrease by 1 </button>
       
    </>
  )
}

export default Liftingstateupchild
