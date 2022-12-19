import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/' onClick={ () => setTimeout( () => window.location.reload() , 1) } >Home</Link>
            </li>
            <li>
              <Link to='/courses' onClick={ () => setTimeout( () => window.location.reload() , 1) } >All Courses</Link>
            </li>
            <li>
              <Link to='/about' onClick={ () => setTimeout( () => window.location.reload() , 1) } >About</Link>
            </li>
            <li>
              <Link to='/team' onClick={ () => setTimeout( () => window.location.reload() , 1) } >Team</Link>
            </li>
            <li>
              <Link to='/journal' onClick={ () => setTimeout( () => window.location.reload() , 1) } >Journal</Link>
            </li>
            <li>
              <Link to='/contact' onClick={ () => setTimeout( () => window.location.reload() , 1) } >Contact</Link>
            </li>
          </ul>
          <a href="http://localhost/my/">
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          </a>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
