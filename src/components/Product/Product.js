import React, { Component } from 'react';

const Product = (props) => {
	return (
		<div>
			<li>{props.product.name}</li>
		</div>
	);
}

export default Product;