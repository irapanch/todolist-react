import React from 'react'
import { Button, Form } from '../RegisterForm/RegisterForm.styled'

const AddForm = () => {
  const submit = (e) => {
    e.preventDefault()
    
}
  return (
    <Form onSubmit={submit}>
      <input placeholder="Type the text..." required />
      <Button  type="submit">Submit</Button>
    </Form>
  )
}

export default AddForm