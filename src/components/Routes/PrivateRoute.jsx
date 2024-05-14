import React from 'react'
import { useSelector } from 'react-redux'
import { selecIsLoggedIn } from '../../redux/auth/selectors'
import { Navigate } from 'react-router-dom'


// Приватним роутом треба огорнути код в App
const PrivateRoute = ({children}) => {
    const isLoggedIn = useSelector(selecIsLoggedIn)
    if (isLoggedIn) {
        return children
    }
  return (
    <Navigate to='/login'/>
  )
}

export default PrivateRoute