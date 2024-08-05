import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Propsdemoinfun from './functioncomponents/Propsdemoinfun'
import Statedemoinfun from './functioncomponents/Statedemoinfun'
import RegistrationForm from './functioncomponents/RegistrationForm'
import FormValidations from './functioncomponents/FormValidations'
import ListRendering from './functioncomponents/ListRendering'
import Products from './functioncomponents/Products'
import Pagenotfound from './Pagenotfound'
import Home from './functioncomponents/Home'
import LiftingstateupParent from './functioncomponents/LiftingstateupParent'
import ReactHookForm from './functioncomponents/ReactHookForm'

const Routing = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<App/>}>
              <Route path='' element={<Home/>}/>
              <Route path='props' element={<Propsdemoinfun/>}/>
              <Route path='state' element={<Statedemoinfun/>}/>
              <Route path='form' element={<RegistrationForm/>}/>
              <Route path='form/valid' element={<FormValidations/>}/>
              <Route path='list/basic' element={<ListRendering/>}></Route>
              <Route path='products' element={<Products/>}/>
              <Route path='lifting' element={<LiftingstateupParent/>}/>
              <Route path='reacthookform' element={<ReactHookForm/>}/>
          </Route>

          <Route path="*" element={<Pagenotfound/>}/>
      </Routes>
    </>
  )
}

export default Routing
