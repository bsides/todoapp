import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './redux/reducers'
import App from './components/App'
import { loadState, saveState } from './redux/localStorage'
import registerServiceWorker from './registerServiceWorker'

// Typefaces
import 'typeface-ibm-plex-sans'
import 'typeface-aleo'

// Styles
import CssBaseline from 'material-ui/CssBaseline'

const persistedState = loadState()
/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
/* eslint-enable */
store.subscribe(() => {
  saveState(store.getState())
})

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
)
registerServiceWorker()
