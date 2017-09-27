import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar/NavBar.jsx'

class Home extends Component {
  render () {
    return (
      <div id='home-container'>
        <NavBar />
      
      </div>
    );
  }
}


export default Home