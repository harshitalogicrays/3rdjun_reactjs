import React, { Component } from 'react'
import UserComp from './UserComp'
import PostsComp from './PostsComp'
import HOCComp from './HOCComp'
import DisplayComp from './DisplayComp'

const User = HOCComp(DisplayComp,{url:"https://jsonplaceholder.typicode.com/users",columns:["id","name","username","email","phone"],heading:"User Data"})
const Post = HOCComp(DisplayComp,{url:"https://jsonplaceholder.typicode.com/posts",columns:["id","userId","title","body"],heading:"Post data"})

export default class MainComp extends Component {
  render() {  return (  <>
      {/* <UserComp/> <hr/> */}
      {/* <PostsComp/> */}
      <User/><hr/> <Post/>
      </>
    )
  }
}
