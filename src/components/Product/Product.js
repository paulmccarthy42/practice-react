import React from 'react';
import StarRatingComponent from 'react-star-rating-component'
import './Product.css'

const Product = (props) => {
	const prodInfo = props.product
	const addProduct = props.function

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
					<button onClick={() => addProduct(prodInfo)}>Add to cart</button>
					<div className='features'>
						<StarRatingComponent 
							name='product-rating' 
							value={prodInfo.rating}
							emptyStarColor='lightgrey'
						/>
						<h5>Features</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
}

export default Product;