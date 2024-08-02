import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Products from './functioncomponents/Products'
import RegistrationForm from './functioncomponents/RegistrationForm'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}>
            <Route path='products' element={<Products/>}></Route>
            <Route path='form' element={<RegistrationForm/>}></Route>
        </Route>
    </Routes>
  )
}

export default Routing

// / =  root url (http://localhost:4000)