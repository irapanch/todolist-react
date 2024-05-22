import React, { useEffect } from 'react'
import AddForm from './AddForm'
import Filter from './Filter'
import TodoItem from './TodoItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilteredTodos } from '../../redux/todos/selectors'
import { fetchTodoThunk } from '../../redux/todos/operations'
import { ListWrap } from './Todolist.styled'

const TodoList = () => {
  const todos = useSelector(selectFilteredTodos)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchTodoThunk())
  }, [dispatch])
  return (
    <>
    <AddForm/>
    <Filter/>
    <ListWrap>
      {todos.map(item => <TodoItem key={item.id} {...item}/>)}
    </ListWrap>
    </>
    
  )
}

export default TodoList