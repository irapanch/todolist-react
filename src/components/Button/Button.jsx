import React from 'react'
import { Button } from '../RegisterForm/RegisterForm.styled'
import LoaderBtn from '../../assets/loader.svg?react'


const ButtonLoader = ({ onSubmit, title , isloading, disabled }) => {
  return (
    <Button className = " submit-btn " onSubmit={onSubmit} disabled={disabled}>
    {!isloading ? title : <LoaderBtn className="spinner" />}
  </Button>
  )
}

export default ButtonLoader