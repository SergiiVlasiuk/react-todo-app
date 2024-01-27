import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import './styles/GlobalStyles.css'

import store from './app/RootStore'

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)


ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById( 'root' )
)
