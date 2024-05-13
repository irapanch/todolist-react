
import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderWrapper, Nav } from './Header.styled'

const Header = () => {
  return (
    <HeaderWrapper>
        <nav>
            <Nav >
              <li><NavLink   to='/'>Home</NavLink></li>
              <li><NavLink  to='/todos'>Todos</NavLink></li>
              <li><NavLink  to='/login'>Login</NavLink></li>
              <li><NavLink  to='/register'>Register</NavLink></li>
              
            </Nav>
        </nav>
        <h2>fff@gmail.com</h2>
        <div >
      <button >Logout</button>
      
    </div>
    </HeaderWrapper>
  )
}

export default Header