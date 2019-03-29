import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper center teal lighten-2">
        <Link to="/" className="brand-logo">
          Uploader
        </Link>
        <ul className="left ">
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
