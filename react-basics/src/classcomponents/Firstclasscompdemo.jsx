// import { Component } from "react";
// import Firstfuncompdemo from "../functioncomponents/Firstfuncompdemo";

// class Firstclasscompdemo extends Component{
//     render(){
//         return (
//             <div>
//             <h1>Firstclasscomp called</h1>
//             <Firstfuncompdemo/>
//             </div>
//         )
//     }
// }
// export default Firstclasscompdemo

//rcc
import React, { Component } from 'react'
import Firstfuncompdemo from '../functioncomponents/Firstfuncompdemo'

export default class Firstclasscompdemo extends Component {
  render() {
    return (
      <div>
        <h1>Firstclasscomp called</h1>
      </div>
    )
  }
}
