
import { Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage, NotFoundPage, RegisterPage, TodosPage } from './pages/index'
import Header from './components/Header/Header'
// npm run deploy

const App = () => {

  

  return (
    <>

     <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/todos' element={<TodosPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
