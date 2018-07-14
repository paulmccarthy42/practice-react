import React, { Component } from 'react';
import logo from '../../images/logo.png'
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <div className='header'>
      	<img src={logo} alt='copyright infringment'/>
      	<p class='menu'>
      		<a href="/shop">Shop</a>
      		<a href="/review">Review</a>
      		<a href="/orders">Orders</a>
      	</p>
      </div>
    );
  }
}

export default Header;