import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav>
      <div
        id="header-nav"
        className="nav-wrapper center teal lighten-2"
        style={{ paddingRight: '120px' }}
      >
        <Link to="/" id="brand-logo" className="brand-logo">
          Uploader
        </Link>
        <ul className="left">
          <li>
            <Link to="/upload">Upload an Image</Link>
          </li>
          <li>
            <Link to="/images">Images</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
