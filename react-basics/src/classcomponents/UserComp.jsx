import React, { Component } from 'react'

export default class UserComp extends Component {
    // constructor(props) {
    //   super(props)
    //   this.state = {users:[] }
    // }
    
//   getData=async()=>{
//     try{
//      let res =  await fetch("https://jsonplaceholder.typicode.com/users")
//      let data = await res.json()
//      console.log(data)
//     this.setState({users:data})
//     }
//     catch(err){console.log(err)}
//   }

//   componentDidMount(){
//     this.getData()
//   }
  render() {
    return (
     <>
        <div class="table-responsive" >
            <table   class="table table-primary"  >
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.length ==0 && <tr><td colSpan={5}>No user found</td></tr>}
                    {this.state.users.map((user,i)=>
                    <tr key={user.id}>
                        <td scope="row">{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
        
     </>
    )
  }
}
