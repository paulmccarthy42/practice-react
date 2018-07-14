import React, { Component } from 'react';
import './Shop.css'
import fakeData from '../../fakeData/index'
import Product from '../Product/Product'

export class Shop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			cart: 0
		}
	}

	handleAddProduct = (prodInfo) => {
		this.setState({cart: this.state.cart + 1})
		console.log('item added, total of' + this.state.cart)
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