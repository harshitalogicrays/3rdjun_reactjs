import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    let links=[
        {url:'/props',text:'props demo'},
        {url:'/state',text:'state demo'},
        {url:'/form',text:'form'},
        {url:'/list/basic',text:'List'},
        {url:'/products',text:'products'},
        {url:'/form/valid',text:'form validations'},
        {url:'/lifting',text:'Lifting the state up '},
        {url:'/reacthookform',text:'React Hook Form Demo'},
        {url:'/hooks',text:'React Hook useEffect,useCallback and useRef Demo'},
        {url:'/usememo',text:'useMemo Demo'},
        {url:'/ref',text:'useRef Demo'},
    ]
  return (
    <ul class="nav flex-column">
        {links.map((item,i)=><li class="nav-item" key={i}>
                        <Link class="nav-link" to={item.url}>{item.text}</Link>
                        </li>
        )}
  </ul>
  )
}

export default Sidebar
