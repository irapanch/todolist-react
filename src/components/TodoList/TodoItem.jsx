import React, { useId } from 'react'
import { ItemWrap } from './Todolist.styled'
import { useDispatch } from 'react-redux'
import { deleteTodoThunk, toggleTodoThunk } from '../../redux/todos/operations'

const TodoItem = ({id, title, completed}) => {
  const idItem = useId()// хук для генерації id всередині форми
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteTodoThunk(id))
  }
 
  return (
    <ItemWrap>
    <h5 >
     <p 
     className={completed ? 'line-through' : ''}
     >{title} </p>
    </h5>
    <div >
      
      
      <input type="checkbox"
      id={idItem} 
        checked={completed} 
        onChange={()=>dispatch(toggleTodoThunk({id, title, completed}))}
        />
      <label htmlFor={idItem}>{completed ? 'Done' : 'Set completed'}</label>
       
        
        
      </div>
    <button
     onClick={handleDelete}
     >
     Delete todo
    </button>
  </ItemWrap>
  )
}

export default TodoItem