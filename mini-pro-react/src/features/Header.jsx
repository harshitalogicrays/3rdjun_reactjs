import React, { useEffect, useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useMyContext } from './contextdemo'
import { ShowOnLogin, ShowOnLogout } from './hiddenlinks'
import { toast } from 'react-toastify'
import ThemeBtn from './ThemeBtn'

const Header = () => {
  const val = useMyContext()
  const redirect=useNavigate()
  // console.log("value = ",val)
    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'About', href: '/about', current: false },
        { name: 'Products', href: '/products', current: false },
      ]
      
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

      let handleLogout=()=>{
        if(sessionStorage.getItem("3rdjunlogin") !=null){
          sessionStorage.removeItem("3rdjunlogin")
          toast.success('loggedout successfully')
          redirect('/')
        }
      }
      let [username,setUsername]=useState("Guest")
      useEffect(()=>{
        if(sessionStorage.getItem("3rdjunlogin") != null)
        {
          let obj = JSON.parse(sessionStorage.getItem("3rdjunlogin"))
          setUsername(obj.name)
        }
        else setUsername("Guest")
      },[sessionStorage.getItem("3rdjunlogin")])
    return (
   <>
     <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto px-2 py-1 sm:px-6 lg:px-7">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex items-center text-center">
              <span className="h-8  text-white  text-center ">mini pro</span>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive}) =>
                     isActive ? "rounded-md px-3 py-2 text-sm font-medium bg-gray-700 text-white" : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-yellow-400 hover:text-white"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <ThemeBtn/>
          
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
           <ShowOnLogout>
                 <NavLink
                     to='/register'
                    className={({ isActive}) =>
                     isActive ? "rounded-md px-3 py-2 text-sm font-medium bg-gray-700 text-white" : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-yellow-400 hover:text-white"
                    }
                  >
                    Register
                  </NavLink>
                   <NavLink
                     to='/login'
                    className={({ isActive}) =>
                     isActive ? "rounded-md px-3 py-2 text-sm font-medium bg-gray-700 text-white" : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-yellow-400 hover:text-white"
                    }
                  >
                    Login
                  </NavLink>
           </ShowOnLogout>
            <Link
              type="button" to='/cart'
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <ShoppingCartIcon aria-hidden="true" className="h-9 w-9 " />
              <span className="absolute -top-1 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full " > {val.cartItems.length} </span>
            </Link>

            {/* Profile dropdown */}
            <ShowOnLogin>

            <a className="rounded-md px-3 py-2 text-sm font-medium text-white" >
                   Welcome {username}
                  </a>
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <button className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    onClick={handleLogout}>
                      Sign out
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </ShowOnLogin>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={NavLink}
              to={item.href}
              className={({ isActive}) =>
                isActive ? "rounded-md px-3 py-2 text-sm font-medium bg-gray-700 text-white" : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-yellow-400 hover:text-white"
               }
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
   </>
  )
}

export default Header
