import React from "react";

function Product() {
	return (
		<figure className="product__figure">
			<div className="product__figure--image">
				<img src="asset/img/products/fat-burner.webp" alt="product image" />
			</div>
			<div className="product__content">
				<h2 className="product__heading">xyz product</h2>
				<span className="product__sub-details">
					<div className="product__logo">
						<img src="asset/img/products/brand-avatar.jpeg" alt="product logo" />
					</div>
					<p className="product__subheading">abc brand</p>
				</span>
				<div className="product__description">
					<p><i className="icon fa-solid fa-check"></i>Premium Category</p>
					<p><i className="icon fa-solid fa-check"></i>Health and Fitness</p>
					<p><i className="icon fa-solid fa-check"></i>Digital Product.</p>
					<p><i className="icon fa-solid fa-check"></i>50% commission</p>
				</div>
			</div>
		</figure>
	);
}

export default Product;
