import React from 'react'
import '../styles/header.css'
import Logo from 'react-icons/lib/fa/newspaper-o'
import User from 'react-icons/lib/ti/user'

const Header = (props) => (
  <header>
    <div className="container-header">
      <div className="top-header">
        <a href="#">
          <p>
            <Logo
              className="logo-header"/>
            <b> Hacker Feed</b>
          </p>
        </a>
        <a href="#">
          <p>
            login
            <User/>
          </p>
        </a>
      </div>
      <nav>
        <a href="#">new |</a>
        <a href="#">comments |</a>
        <a href="#">show |</a>
        <a href="#">ask |</a>
        <a href="#">jobs |</a>
        <a href="#">submit</a>
      </nav>
    </div>
  </header>
)

export default Header
