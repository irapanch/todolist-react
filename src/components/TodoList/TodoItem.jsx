import React, { useId } from 'react'
import { ItemWrap } from './Todolist.styled'
import { useDispatch } from 'react-redux'
import { deleteTodoThunk, toggleTodoThunk } from '../../redux/todos/operations'
import { Button } from '../RegisterForm/RegisterForm.styled'

const TodoItem = ({id, text, completed}) => {
  const idItem = useId()// хук для генерації id всередині форми
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteTodoThunk(id))
  }
 
  return (
    <ItemWrap>
    <h3 >
     <p 
     className={completed ? 'line-through' : ''}
     >{text} </p>
    </h3>
    <div >
      
      
      <input type="checkbox"
      id={idItem} 
        checked={completed} 
        onChange={()=>dispatch(toggleTodoThunk({id, text, completed}))}
        />
      <label htmlFor={idItem}>{completed ? 'Done' : 'Set completed'}</label>
       
        
        
      </div>
    <Button
     onClick={handleDelete}
     >
     Delete todo
    </Button>
  </ItemWrap>
  )
}

export default TodoItem