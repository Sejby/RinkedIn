import React from 'react'
import './Header.scss'
import {Routes, Route, Link } from "react-router-dom";
import Body from '../body/Body'
import Contact from '../contact/Contact'
import About from '../about/About'
import Register from '../register/Register'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket,fa-right-from-bracket } from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (<>
    <header>
      <Link to="/" style={{textDecoration: 'none', color: 'white'}}><h3>Rinked<span>In</span></h3></Link>

      <div id="navmenu">
        <ul>
          <li><Link to="/o-aplikaci">O Aplikaci</Link></li>
          <li><Link to="/kontakt">Kontakt</Link></li>
        </ul>

          <input type="text" placeholder="Uživatelské jméno" name="uzivatelskejmeno" id="username_input"/>
          <input type="password" placeholder="Heslo" name="heslo" id="pwd_input"/>
          <button type='submit' className='btn btn-success btn-sm'><FontAwesomeIcon icon={faRightFromBracket}/>Přihlásit</button>
          <Link to="/registrace"><button type='submit' className='btn btn-danger btn-sm'>Registrovat<FontAwesomeIcon icon={faRightFromBracket}/></button><i class="fa-solid fa-right-from-bracket"></i></Link>
        </div>
    </header>

    <Routes>
      <Route path="/" element={<Body />} />
      <Route path='/o-aplikaci' element={<About />} />
      <Route path="/kontakt" element={<Contact />} />      
      <Route path='/registrace' element={<Register />} />
    </Routes>
    </>
  )
}

export default Header