import React from 'react'
import { Button } from '../RegisterForm/RegisterForm.styled'
import LoaderBtn from '../../assets/loader.svg?react'


const ButtonLoader = ({ title , isloading}) => {

  return (
    <Button className = " submit-btn "  disabled={isloading}>
    {!isloading ? title : (<>
      <LoaderBtn className="spinner"/>
      <p style={{ display: 'inline' }}>{'  '}{'  '}{title}</p>
    </>)}
  </Button>
  )
}

export default ButtonLoader