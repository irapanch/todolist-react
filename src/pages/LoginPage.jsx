import React from 'react'
import { useForm } from 'react-hook-form';
import { Button, Form, StyledLink } from '../components/RegisterForm/RegisterForm..styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from '../redux/auth/operations';

export const LoginPage = () => {
  const {handleSubmit, register} = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submit = data => {
    dispatch(loginThunk(data))
    .unwrap()
.then(()=> {
  alert(`Welcome ${data.email}!`)
  navigate('/todos')
})
.catch(()=> alert('Data is not valid!'))
}
  return (
    <section>
      <Form onSubmit={handleSubmit(submit)}>
      <h2>Login</h2>
        <label>  <input {...register('email')} placeholder="Email" /></label>
        <label> <input {...register('password')} placeholder="Password"/></label>
      
       
        <Button type="submit" >Submit</Button>
        <StyledLink to='/register'>Register</StyledLink>
      </Form>

    </section>
  )
}

