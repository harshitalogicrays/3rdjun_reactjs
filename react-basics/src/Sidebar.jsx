import React from 'react'

const Sidebar = () => {
    let links=[
        {url:'',text:'props demo'},
        {url:'',text:'state demo'},
        {url:'',text:'form'},
        {url:'',text:'List'},
        {url:'',text:'products'},
        {url:'',text:'form validations'},
    ]
  return (
    <ul class="nav flex-column">
        {links.map((item,i)=><li class="nav-item" key={i}>
                        <a class="nav-link" aria-current="page" href="#">{item.text}</a>
                        </li>
        )}
  </ul>
  )
}

export default Sidebar
