import React, { useState } from 'react'
import { Button, Form } from '../RegisterForm/RegisterForm.styled'
import { useDispatch } from 'react-redux'
import { addTodoThunk } from '../../redux/todos/operations'

const AddForm = () => {
  const dispatch = useDispatch()
    const [value, setValue] = useState('')
  const submit = (e) => {
    e.preventDefault()
    dispatch(addTodoThunk({text: value}))
    setValue('')
    
}
  return (
    <Form onSubmit={submit}>
      <input value={value} onChange={e => setValue(e.target.value)}placeholder="Type the text..." required />
      <Button  type="submit">Submit</Button>
    </Form>
  )
}

export default AddForm