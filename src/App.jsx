
import { Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage, NotFoundPage, RegisterPage, TodosPage } from './pages/index'
import Header from './components/Header/Header'
import PrivateRoute from './components/Routes/PrivateRoute'
// npm run deploy

const App = () => {

  

  return (
    <>

     <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* елемент TodosPage огорнутий приватним роутом */}
        <Route path='/todos' element={
        <PrivateRoute>
 <TodosPage/>
        </PrivateRoute>
       }/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
