import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './components/App'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App compiler="TypeScript" framework="React" />
  </Provider>,
  document.getElementById('app')
)
