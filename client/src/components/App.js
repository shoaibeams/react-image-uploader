import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="center-align" style={{ marginTop: '200px' }}>
        <h3>Welcome to Uploader!</h3>
        <p>
          Let's get started. To upload your first image, click{' '}
          <Link to="/upload">
            <span>here</span>
          </Link>
          .
        </p>
      </div>
    )
  }
}

export default App
