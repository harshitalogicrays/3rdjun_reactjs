import React from 'react'
import { BsHouse } from 'react-icons/bs'
import { FaArrowCircleLeft, FaLock, FaPenAlt, FaSearch, FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
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
            <a class="nav-link active" aria-current="page" href="#"><BsHouse/> Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
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
            <a class="nav-link" href="#"><FaPenAlt/> register</a>
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
