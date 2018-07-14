import React, { Component } from 'react';

export class Product extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<li>{this.props.product.name}</li>
			</div>
		);
	}
}

export default Product;