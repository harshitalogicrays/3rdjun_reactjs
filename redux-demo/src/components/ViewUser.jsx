import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_ALL_USER, REMOVE_USER, selectUsers } from '../redux/userSlice'

const ViewUser = () => {
    // const allUsers = useSelector((state)=>state.user.users)

    const allUsers = useSelector(selectUsers)
    const dispatch = useDispatch()
  return (
   <>
    <h1>Users</h1><hr/>
    <div class="table-responsive" >
        <table  class="table table-bordered table-stripped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th><th>Password</th><th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {allUsers.length==0 && <tr><td colspan={5}>No user found</td></tr>}
                {allUsers.map((user,i)=>
                <tr key={i}>
                    <td scope="row">{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td><button type="button" class="btn btn-danger" 
                    onClick={()=>dispatch(REMOVE_USER(user.id))}>
                        <FaTrashAlt/>
                    </button>
                    </td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
    <button type="button" class="btn btn-danger btn-lg" onClick={()=>dispatch(REMOVE_ALL_USER())}>
    <FaTrashAlt/>  Remove All 
                    </button>
   </>
  )
}

export default ViewUser
