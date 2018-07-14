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
      	<div className='cart-container'>
      		<h5>Order Summary</h5>
      		<p><small>Items Ordered: {this.state.cart.length} </small></p>
      		<button>Order Review</button>
      	</div>
      </div>
    );
  }
}

export default Shop;