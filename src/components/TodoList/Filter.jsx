import React from 'react'
import { Button } from '../RegisterForm/RegisterForm.styled'
import { useDispatch } from 'react-redux'
import { setFilterStr } from '../../redux/todos/slice'

const Filter = () => {
  const dispatch= useDispatch()
  return (
    <div>
      <Button  onClick={() => dispatch(setFilterStr('all'))}>All</Button>
    <Button  onClick={() => dispatch(setFilterStr('active'))}>Active</Button>
    <Button onClick={() => dispatch(setFilterStr('completed'))}>Completed</Button>
    </div>
  )
}

export default Filter