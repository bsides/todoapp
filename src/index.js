import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './redux/reducers'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

// Typefaces
import 'typeface-ibm-plex-sans'
import 'typeface-aleo'

// Styles
import CssBaseline from 'material-ui/CssBaseline'

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
/* eslint-enable */

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
