import React from "react";

import { LuPlus } from "react-icons/lu";


function FAQSection() {
	return (
		<section className="section faq__section">
			<div className="section__container">
				<h3 className="section__heading--secondary center capitalize">
					frequenty asked questions
				</h3>
				<div className="faq">
					<div className="faq__accordion">
						<div className="faq__accordion--item">
							<div className="accordion__content--title">
								<h3 className="accordion__heading">What is clubmerce?</h3>
								<span><LuPlus /></span>
							</div>
							<div className="faq__accordion--content">
								<p className="accordion__content--text">
									Clubmerce is an innovative affiliate marketing platform that
									connects brands, vendors, and affiliate marketers in a seamless
									ecosystem. With Clubmerce, affiliates can promote a wide range
									of products and services while earning commissions on successful
									product purchase.
								</p>
							</div>
						</div>
						<div className="faq__accordion--item">
							<div className="accordion__content--title">
								<h3 className="accordion__heading">
									What types of products can I promote as an affiliate?
								</h3>
								<span><LuPlus /></span>
							</div>
							<div className="faq__accordion--content">
								<p className="accordion__content--text">
									As an affiliate, you can promote a diverse range of products or
									services including physical products, digital products,
									services, travel and hospitality, beauty and personal care,
									financial products, home and garden items, food and beverage
									products, fashion and accessories, and lifestyle and wellness
									products.
								</p>
							</div>
						</div>
						<div className="faq__accordion--item">
							<div className="accordion__content--title">
								<h3 className="accordion__heading">
									Is there a minimum payout threshold for affiliate earnings?
								</h3>
								<span><LuPlus /></span>
							</div>
							<div className="faq__accordion--content">
								<p className="accordion__content--text">
									The minimum payout threshold for affiliate earnings on Clubmerce
									is $50. Once your earnings reach this threshold, you become
									eligible for withdrawal. This ensures that you receive a
									substantial amount before initiating the payout process.
									Clubmerce values your efforts as an affiliate and aims to
									provide a fair and transparent system for earning commissions.
								</p>
							</div>
						</div>
					</div>
					<div className="faq__accordion">
						<div className="faq__accordion--item">
							<div className="accordion__content--title">
								<h3 className="accordion__heading">
									Can I promote multiple products from different vendors on this
									platform?
								</h3>
								<span><LuPlus /></span>
							</div>
							<div className="faq__accordion--content">
								<p className="accordion__content--text">
									Yes, on Clubmerce, you have the flexibility to promote multiple
									products or services from different vendors within the platform.
									As an affiliate, you can explore a diverse marketplace and
									choose from a wide range of offerings. This allows you to
									diversify your promotional efforts, target various niches, and
									cater to the interests of your audience. Clubmerce provides a
									centralized platform where you can easily manage and track your
									promotions across different vendors, making it convenient to
									engage with multiple products or services simultaneously.
								</p>
							</div>
						</div>
						<div className="faq__accordion--item">
							<div className="accordion__content--title">
								<h3 className="accordion__heading">
									How can I maximize my affiliate marketing success on this
									platform?
								</h3>
								<span><LuPlus /></span>
							</div>
							<div className="faq__accordion--content">
								<p className="accordion__content--text">
									To maximize your affiliate marketing success on Clubmerce,
									consider implementing the following strategies:
								</p>
								<p className="accordion__content--text">
									1. Choose the Right Products: Select products or services that
									align with your target audience's interests and needs.
								</p>
								<p className="accordion__content--text">
									2. Build a Strong Online Presence: Establish a compelling online
									presence through a website, blog, or social media channels.
								</p>
								<p className="accordion__content--text">
									3. Leverage Promotional Tools: Utilize the marketing tools and
									resources provided by Clubmerce, such as banners, text links,
									and product widgets.
								</p>
								<p className="accordion__content--text">
									4. Engage Your Audience: Interact with your audience through
									engaging content, comments, and social media engagement.
								</p>
								<p className="accordion__content--text">
									5. Track and Analyze Performance: Regularly monitor your
									affiliate performance using Clubmerce's tracking and analytics
									tools.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FAQSection;
