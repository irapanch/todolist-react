import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, StyledLink } from '../components/RegisterForm/RegisterForm.styled'
import { useDispatch, useSelector } from 'react-redux'
import { registerThunk } from '../redux/auth/operations'
import { useNavigate } from 'react-router-dom'
import ButtonLoader from '../components/Button/Button'
import { selectLoading } from '../redux/auth/selectors'

export const RegisterPage = () => {
  const {handleSubmit, register, reset} = useForm()
  const isLoading = useSelector(selectLoading)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submit = data => {
dispatch(registerThunk(data))
.unwrap() //дочекайся виконання промісу, розгорни всі дані (res)
.then(()=> {
  alert(`Welcome ${data.name}!`) 
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
        
    
        <ButtonLoader isloading={isLoading} title='Register'/>
        <StyledLink to='/login'>Login</StyledLink>
      </Form>
    </section>
  )
}

