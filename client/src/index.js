import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App'
import Header from './components/Header'
import Uploader from './components/Uploader'
import ImageViewer from './components/ImageViewer'
import Test from './components/Test'
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
      <Route path="/upload" exact component={Uploader} />
      <Route path="/images" exact component={ImageViewer} />
      <Route path="/test" exact component={Test} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
