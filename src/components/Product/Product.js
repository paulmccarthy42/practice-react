import React, { Component } from 'react';
import './Product.css'

const Product = (props) => {
	const prodInfo = props.product

	return (
		<div className='product'>
		<div>
			<img src={prodInfo.img} alt= {prodInfo.name}/>
		</div>
		<div>
			<h4 className='product-name'>{prodInfo.name}</h4>
			<div className='product-info'>
				<div>
					<p> by {prodInfo.seller} </p>
					<p> ${prodInfo.price} </p>
					<button>Add to cart</button>
					<div className='features'>Features</div>
				</div>
			</div>
		</div>
	</div>
	);
}

export default Product;