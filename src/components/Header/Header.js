import React, { Component } from 'react';
import logo from '../../images/logo.png'
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <div className='header'>
      	<img src={logo} alt='copyright infringment'/>
      </div>
    );
  }
}

export default Header;