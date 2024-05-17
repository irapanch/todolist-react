import React from 'react'
import { AuthLink, HomeWrap } from '../components/TodoList/Todolist.styled'

export const HomePage = () => {
  return (
   
    <HomeWrap>
      <h1>Plan your day. Open {' '}
      <AuthLink to='/todos'> TODO </AuthLink>!</h1> 
      <h3>
      You can {' '}
      <AuthLink to='/login'> Login </AuthLink>
      or {' '}
      <AuthLink to='/register'> Register</AuthLink>
      </h3>
      </HomeWrap>
  )
}

