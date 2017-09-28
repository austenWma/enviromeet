import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, Button } from 'react-bootstrap'

class NavBar extends Component {
  render () {
    return (
      <div className='navbar navbar-toggleable-md navbar-light bg-faded ' style={{fontSize:'14px'}}>
        <Link to='/' className="nav-item nav-link">Home</Link>
        <Link to='/news' className="nav-item nav-link">News</Link>
        <Link to='/fundme' className="nav-item nav-link">Fund Me</Link>
        <Link to='/meet' className="nav-item nav-link">Meet Ups</Link>
      </div>
    );
  }
}


export default NavBar