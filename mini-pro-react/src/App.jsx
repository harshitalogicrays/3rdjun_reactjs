// import './App.css'

import { Outlet } from "react-router-dom"
import Header from "./features/Header"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
 <>
 <ToastContainer position="bottom-left" autoClose={2000} hideProgressBar={false} newestOnTop={false}
closeOnClick rtl={false} pauseOnFocusLoss={false} draggable={false} pauseOnHover={false}
theme="colored"/>
  <Header/>
  <Outlet/>
 </>
  )
}

export default App
