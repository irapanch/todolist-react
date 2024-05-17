
import { Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage, NotFoundPage, RegisterPage, TodosPage } from './pages/index'
import Header from './components/Header/Header'
import PrivateRoute from './components/Routes/PrivateRoute'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsRefresh } from './redux/auth/selectors'
import { refreshThunk } from './redux/auth/operations'
import { Loader } from './components/Loader/Loader'
import { useEffect } from 'react'
// npm run deploy

const App = () => {
  const dispatch = useDispatch()
	const isRefresh = useSelector(selectIsRefresh)
	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])

  return isRefresh ? (
		<Loader />
	) : (
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
