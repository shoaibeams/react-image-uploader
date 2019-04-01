import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App'
import Header from './components/Header'
import UploadForm from './components/UploadForm'
import ImageViewer from './components/ImageViewer'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Route path="/" exact component={App} />
      <Route path="/upload" component={UploadForm} />
      <Route path="/images" component={ImageViewer} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
