import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'

const initiallState = {
  counter: 0
}

const counterReducer = (state = initiallState,action  ) => {
  switch(action.type ) {
    case 'INCREMENT':
      return {counter:state.counter +1}
    case 'DECREMENT':
      return {counter:state.counter -1}
    default: return state
  }
}



const store = createStore(counterReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  
)
