import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render () {
    return (
      <div>
        <Link to='/'>home</Link>
        <Link to='/fundme'>Fund Me</Link>
        <Link to='/meet'>Meet Ups</Link>
        <Link to='/news'>News</Link>
      </div>
    );
  }
}


export default Home