import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render () {
    return (
      <div className='navbar navbar-toggleable-md navbar-light bg-faded sticky-top' style={{fontSize:'14px', backgroundColor:'#cbeacb'}}>
        <Link to='/' className="nav-item nav-link" style={{color:'black'}}>Home</Link>
        <Link to='/news' className="nav-item nav-link" style={{color:'black'}}>News</Link>
        <Link to='/fundme' className="nav-item nav-link" style={{color:'black'}}>Fund Me</Link>
        <Link to='/meet' className="nav-item nav-link" style={{color:'black'}}>Meet Ups</Link>
        <Link to='/education' className="nav-item nav-link" style={{color:'black'}}>Education</Link>
      </div>
    );
  }
}


export default NavBar