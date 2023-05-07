import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='app-header'>
      <div className='logo'><h3>RLPP</h3></div>
      <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
         <li><Link to="profile">Profile</Link></li>
         <li><Link to="dashboard">Dashboard</Link></li>
         <li><Link to="login">Login</Link></li>
         <li><Link to="register">Register</Link></li>
    </ul>
      </nav>
      
      </div>
  )
}

export default Header