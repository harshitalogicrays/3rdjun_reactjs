import React from 'react'
import './Sidebar.css'
const Sidebar = ({open,close}) => {
    const contentStyle = {
        transition: 'opacity 0.8s',
        opacity: open ? 1 : 0,
        visibility:open?'visible':'hidden'
      };
  return (
    <div className="sidebar" style={contentStyle}>
      <button type="button" className='btn-close float-end' onClick={close}></button>
      <ul className='nav flex-column'>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
    </li>
      </ul>
    </div>
  )
}

export default Sidebar
