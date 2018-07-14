import React, { Component } from 'react';
import './Shop.css'
import fakeData from '../../fakeData/index'
import Product from '../Product/Product'

export class Shop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			cart: []
		}
	}

	handleAddProduct = (prod) => {
		const newCart = [...this.state.cart, prod]
		this.setState({cart: newCart})
		console.log('item added, total of' + this.state.cart.length)
		console.log(prod)
	}

	componentDidMount() {
		const first10 =fakeData.slice(0,10);
		this.setState({products: first10})
		console.log(first10)
	}

  render() {
    return (
      <div className='shop'>
      	<div className='product-container'>
	      	{
	      		this.state.products.map(product => <Product key={product.id} product={product} function={this.handleAddProduct}/>)
	      	}
      	</div>
      	<div className='cart-container'>Carts</div>
      </div>
    );
  }
}

export default Shop;