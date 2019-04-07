import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Welcome from './Welcome'
import Uploader from './Uploader'
import ImageViewer from './ImageViewer'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route path="/" exact component={Welcome} />
          <Route path="/upload" component={Uploader} />
          <Route path="/images" component={ImageViewer} />
        </Router>
      </div>
    )
  }
}
export default App
