import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { BrowserRouter } from 'react-router-dom'
import { Provider} from 'react-redux'
import { persistor, store } from './redux/store'
import GlobalStyles from './styles/GlobalStyles'
import { PersistGate } from 'redux-persist/integration/react'




ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter basename="todolist-react">
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
      
      <GlobalStyles />
    </Provider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
