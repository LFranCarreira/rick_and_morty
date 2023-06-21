import React  from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './Redux/store.js'
import {Provider} from "react-redux"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,document.getElementById('root')
)
