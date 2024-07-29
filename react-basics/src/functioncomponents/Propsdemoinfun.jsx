// import React from 'react'

// const Propsdemoinfun = (props) => {
//     console.log(props) //read only
//     // props.username="Harshita" //Cannot assign to read only property 'username' of object 
//   return (
//     <div>
//         {props.address}<br/>
//         {/* {props.children} */}
//         {props.children[1]}
//     </div>
//   )
// }

// export default Propsdemoinfun


import React from 'react'

const Propsdemoinfun = ({username,address,children}) => {
  return (
    <React.Fragment>
       {address}<br/>
       {children} 
    </React.Fragment>
  )
}

export default Propsdemoinfun
