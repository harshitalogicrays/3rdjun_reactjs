import React, { Fragment, useEffect, useState } from 'react'
import { BsHouse } from 'react-icons/bs'
import { FaArrowCircleLeft, FaLock, FaPenAlt, FaSearch, FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { LOGOUT_USER, selectIsLoggedIn, selectName } from '../redux/authSlice'
import { toast } from 'react-toastify'
import { ShowOnLogin, ShowOnLogout } from './hiddenlinks'

const Navbar = () => {
const dispatch = useDispatch()
const navigate = useNavigate()

const isLoggedIn = useSelector(selectIsLoggedIn)
const name = useSelector(selectName)
  let handleLogout=()=>{
    if(isLoggedIn){
      dispatch(LOGOUT_USER())
      toast.success("LoggedOut Successfully")
      navigate('/')
    }
  }
let [username,setUsername]=useState('')
useEffect(()=>{
  if(name){setUsername(name)}},[isLoggedIn])
 return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">main</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <NavLink class="nav-link" to='/'   className={({ isActive }) =>
            isActive ? "active text-danger bg-info nav-link fw-bold" : "nav-link"
              }><BsHouse/> Home</NavLink>
        
          </li>
          <li class="nav-item">
          <NavLink class="nav-link" to='/products'   className={({ isActive }) =>
            isActive ? "active text-danger bg-info nav-link fw-bold" : "nav-link"
              }><BsHouse/> Products</NavLink>
        
          </li>
        </ul>
        <form class="d-flex" role="search">
            <div className="input-group">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-danger" type="submit"><FaSearch/></button></div>
      </form>
        <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link" href="#"><FaShoppingCart size={30}/>
            <span  class="badge rounded-pill text-bg-danger">0</span  >
            </a>
          </li>
          <ShowOnLogout>
            <li class="nav-item">
            <NavLink class="nav-link" to='/login'   className={({ isActive }) =>
              isActive ? "active text-danger bg-info nav-link fw-bold" : "nav-link"
                }><FaPenAlt/> Login</NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to='/register'   className={({ isActive }) =>
              isActive ? "active text-danger bg-info nav-link fw-bold" : "nav-link"
                }><FaPenAlt/> register</NavLink>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li class="nav-item">
              <a class="nav-link" href="#">Welcome {username}</a>
            </li>
            <li class="nav-item">
              <button class="nav-link" onClick={handleLogout}><FaArrowCircleLeft/> Logout</button>
            </li>
          </ShowOnLogin>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
