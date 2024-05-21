import React from 'react'
import { Button } from '../RegisterForm/RegisterForm.styled'
import { useDispatch } from 'react-redux'
import { setFilterStr } from '../../redux/todos/slice'
import { FilterWrap } from './Todolist.styled'

const Filter = () => {
  const dispatch= useDispatch()
  return (
    <FilterWrap>
      <Button  onClick={() => dispatch(setFilterStr('all'))}>All</Button>
    <Button  onClick={() => dispatch(setFilterStr('active'))}>Active</Button>
    <Button onClick={() => dispatch(setFilterStr('completed'))}>Completed</Button>
    </FilterWrap>
  )
}

export default Filter