import React, { Fragment } from 'react'
import { BsHouse } from 'react-icons/bs'
import { FaArrowCircleLeft, FaLock, FaPenAlt, FaSearch, FaShoppingCart } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  let links=[
    {url:'classdemo',text:'class comp'},
    {url:'/peclass',text:'props,event demo'},
    {url:'/stateclass',text:'state demo'},
    {url:'/stateform',text:'state form demo'},
    {url:'/statelifecycle',text:'Life cycle Methods'},
    {url:'/pure',text:'pure comp demo'},
    {url:'/hoc',text:'Higher Order Component demo'},
]
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Mypro</a>
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
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Class Components
          </a>
          <ul class="dropdown-menu">
            {links.map((link,i)=><Fragment key={i}>
              <li><Link class="dropdown-item" to={link.url}>{link.text}</Link></li>
              {links.length-1 != i  &&  <li><hr class="dropdown-divider"/></li>}
            </Fragment>)}
          </ul>
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
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#"><FaLock/> Login</a>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to='/form/valid'   className={({ isActive }) =>
            isActive ? "active text-danger bg-info nav-link fw-bold" : "nav-link"
              }><FaPenAlt/> register</NavLink>

            {/* <NavLink class="nav-link" to='/form/valid'   
            style={({ isActive}) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "",
                backgroundColor: isActive ? "aqua" : "",
              };
            }}
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
                }
            ><FaPenAlt/> register</NavLink> */}
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><FaArrowCircleLeft/> Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
