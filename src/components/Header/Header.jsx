
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, HeaderWrapper, Nav } from './Header.styled'
import { useDispatch, useSelector } from 'react-redux'
import { selecIsLoggedIn,  selectUser } from '../../redux/auth/selectors'
import { logoutThunk } from '../../redux/auth/operations'

const Header = () => {
  const {name} = useSelector(selectUser)
  const isLoggedin = useSelector(selecIsLoggedIn)
  const dispatch = useDispatch()
const handleLogout = () =>{
dispatch(logoutThunk())
}
  return (
    <HeaderWrapper>
        <nav >
            <Nav >
             
              <li><NavLink   to='/'>Home</NavLink></li>
              
              {isLoggedin && (
                <>
                <li><NavLink  to='/todos'>Todos</NavLink></li>
                </>
              )}
              {!isLoggedin && (
                <>
                <li><NavLink  to='/login'>Login</NavLink></li>
              <li><NavLink  to='/register'>Register</NavLink></li>
                </>
              )}
              
              
            </Nav>
        </nav>
        {isLoggedin && (
          <>
           <h2>{name}</h2>
        <Button onClick={handleLogout}>
        Logout
      
    </Button>
          </>
        )}
       
    </HeaderWrapper>
  )
}

export default Header