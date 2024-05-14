import React from 'react'
import { useForm } from 'react-hook-form';
import {  Form, StyledLink } from '../components/RegisterForm/RegisterForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from '../redux/auth/operations';
import ButtonLoader from '../components/Button/Button';
import { selectLoading } from '../redux/auth/selectors';

export const LoginPage = () => {
  const {handleSubmit, register} = useForm()
  const isLoading = useSelector(selectLoading)
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
      
       
        <ButtonLoader isloading={isLoading} title='Login'/>
        <StyledLink to='/register'>Register</StyledLink>
      </Form>

    </section>
  )
}

