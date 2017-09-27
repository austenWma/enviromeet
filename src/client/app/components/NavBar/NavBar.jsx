import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, Button } from 'react-bootstrap'

class NavBar extends Component {
  render () {
    return (
      <Nav bsStyle="pills" id='navbar'>
        <Button><Link to='/'>home</Link></Button>
        <Button><Link to='/fundme'>Fund Me</Link></Button>
        <Button><Link to='/meet'>Meet Ups</Link></Button>
        <Button><Link to='/news'>News</Link></Button>
      </Nav>
    );
  }
}


export default NavBar