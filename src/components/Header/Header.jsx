
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, HeaderWrapper, Nav } from './Header.styled'

const Header = () => {
  return (
    <HeaderWrapper>
        <nav >
            <Nav >
              <li><NavLink   to='/'>Home</NavLink></li>
              <li><NavLink  to='/todos'>Todos</NavLink></li>
              <li><NavLink  to='/login'>Login</NavLink></li>
              <li><NavLink  to='/register'>Register</NavLink></li>
              
            </Nav>
        </nav>
        <h2>fff@gmail.com</h2>
        <Button>
        Logout
      
    </Button>
    </HeaderWrapper>
  )
}

export default Header