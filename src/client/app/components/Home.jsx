import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar/NavBar.jsx'

class Home extends Component {
  render () {
    return (
      <div id='home-container'>
        <NavBar />
        Welcome to Enviromeet! <br/>
        A place where all environmentalists can meet
      </div>
    );
  }
}


export default Home