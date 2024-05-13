
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header >
        <nav>
            <ul >
              <li><NavLink   to='/'>Home</NavLink></li>
              <li><NavLink  to='/todos'>Todos</NavLink></li>
              <li><NavLink  to='/login'>Login</NavLink></li>
              <li><NavLink  to='/register'>Register</NavLink></li>
              
            </ul>
        </nav>
        <h2>fff@gmail.com</h2>
        <div >
      <button >Logout</button>
      
    </div>
    </header>
  )
}

export default Header