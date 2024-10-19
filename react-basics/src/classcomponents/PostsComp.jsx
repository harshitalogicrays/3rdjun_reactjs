import React, { Component } from 'react'

export default class PostsComp extends Component {
    constructor(props) {
        super(props)
        this.state = {posts:[] }
      }
      
    getData=async()=>{
      try{
       let res =  await fetch("https://jsonplaceholder.typicode.com/posts")
       let data = await res.json()
       console.log(data)
      this.setState({posts:data})
      }
      catch(err){console.log(err)}
    }
  
    componentDidMount(){
      this.getData()
    }
    render() {
      return (
       <>
          <div class="table-responsive" >
              <table   class="table table-primary"  >
                  <thead>
                      <tr>
                          <th scope="col">ID</th>
                          <th scope="col">UserId</th>
                          <th scope="col">title</th>
                          <th>body</th>
                       </tr>
                  </thead>
                  <tbody>
                      {this.state.posts.length ==0 && <tr><td colSpan={4}>No post found</td></tr>}
                      {this.state.posts.map((user,i)=>
                      <tr key={user.id}>
                          <td scope="row">{user.id}</td>
                          <td>{user.userId}</td>
                          <td>{user.title}</td>
                          <td>{user.body}</td>
                      </tr>)}
                  </tbody>
              </table>
          </div>
          
       </>
      )
    }
  }