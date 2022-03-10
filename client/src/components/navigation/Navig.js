import React from 'react';
import './Navig.css'
import {Nav, NavLink, Bars,NavMenu, NavBtn,NavBtnLink} from './NavBarElements'

const Navig = () => {
  return (
    <>
    <Nav>
      <NavLink className='nav_link' to='/'>
        <img className='AfterSchool' src={require('../../images/After_School.png')} alt='logo' />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink className='nav_link'  to='/' activeStyle>
          Acceuil
        </NavLink>
        <NavLink className='nav_link'  to='/services' activeStyle>
          Nos contenus
        </NavLink>
        <NavLink className='nav_link'  to='/contactus' activeStyle>
          Nous contacter
        </NavLink>
        <NavLink className='nav_link'  to='/signup' activeStyle>
          Sign Up
        </NavLink>
        <NavBtn>
        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
      </NavBtn>
      </NavMenu>
      
    </Nav>
  </>
  );
};

export default Navig;
