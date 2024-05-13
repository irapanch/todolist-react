import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { BrowserRouter } from 'react-router-dom'
import { Provider} from 'react-redux'
import { store } from './redux/store'
import GlobalStyles from './styles/GlobalStyles'




ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter basename="todolist-react">
    <Provider store={store}>
      
      <App />
      <GlobalStyles />
    </Provider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
