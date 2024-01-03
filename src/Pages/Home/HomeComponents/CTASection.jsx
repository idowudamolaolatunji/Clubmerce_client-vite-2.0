import React from "react";

function CTASection() {
	return (
		<section className="section cta1__section">
			<div className="section__container">
				<div className="section__heading">
					<h2 className="section__heading--secondary capitalize">
						Need affiliate to promote your products?
					</h2>
					<h3 className="cta__content--text">Get Started As A Vendor</h3>
					<a className="section__button btn cta__button" href="/vendor">
						Get started
					</a>
				</div>
			</div>
		</section>
	);
}

export default CTASection;
