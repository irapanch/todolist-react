import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Form, StyledLink } from '../components/RegisterForm/RegisterForm..styled'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../redux/auth/operations'
import { useNavigate } from 'react-router-dom'

export const RegisterPage = () => {
  const {handleSubmit, register, reset} = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submit = data => {
dispatch(registerThunk(data))
.unwrap() //дочекайся виконання промісу, розгорни всі дані (res)
.then((res)=> {
  alert(`Welcome ${res.name}!`) // дані надходять не з редакса(data), а з респонсу (res)
  reset()
  navigate('/todos')
})
.catch(()=> alert('Data is not valid!'))
  }
  return (
    <section>
      <Form onSubmit={handleSubmit(submit)}>
        <h2>Register</h2>
        <label><input {...register('name')} placeholder="Name"/></label>
        <label><input {...register('email')} placeholder="Email" /></label>
        <label>     <input {...register('password')} placeholder="Password"/></label>
        
    
        <Button type="submit" >Submit</Button>
        <StyledLink to='/login'>Login</StyledLink>
      </Form>
    </section>
  )
}

