import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div >
      <h1 >Ooops! Page is not found..   </h1>
      <h2 >
        You can go to <Link  to='/todos'>Todos</Link> page
      </h2>
    </div>
  )
}

