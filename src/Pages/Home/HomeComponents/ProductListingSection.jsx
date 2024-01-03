import React from "react";
import Product from "./Product";
import AdsVert from '../../../Components/Ads/AdsVert';

function ProductListingSection() {
	return (
		<section className="product-listing__section">
			<div className="product-listing__container">
				<h2 className="section__heading--secondary center">Our Featured Products</h2>
				<div className="product__ads">
					<div className="products__cards">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>

                    <AdsVert />
				</div>
			</div>
		</section>
	);
}

export default ProductListingSection;
