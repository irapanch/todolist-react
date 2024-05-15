import React, { useEffect } from 'react'
import AddForm from './AddForm'
import Filter from './Filter'
import TodoItem from './TodoItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilteredTodos, selectTodos } from '../../redux/todos/selectors'
import { fetchTodoThunk } from '../../redux/todos/operations'

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
    <ul>
      {todos.map(item => <TodoItem key={item.id} {...item}/>)}
    </ul>
    </>
    
  )
}

export default TodoList