import React from "react";
import { Link } from 'react-router-dom'
import AuthHeader from "../../Components/Headers/AuthHeader";

import '../../Assets/css/otherPages.css';

function index() {
	return (
		<>
			<AuthHeader />
			<div className="page__hero vendor">
				<div className="section__container">
					<div className="page__head--text">
						<h3 className="page--title">Vendor Resource</h3>
						<p className="head--text">
							We're excited to have you join our platform and start selling your
							products. Below, you'll find all the essential information and steps you
							need to follow to get started and make the most out of your partnership
							with us.
						</p>
						<a className="content__button" href="#sub">
							Become A Vendor Now
						</a>
					</div>
				</div>
			</div>
			<main>
				<section className="page__section">
					<div className="section__container">
						<h3 className="section__title">Welcome to our vendor program! </h3>
						<div className="get__started--content">
							<div className="content"> </div>
						</div>
					</div>
				</section>
				<div className="section">
					<div className="subscription__cards section__container" id="sub">
						<figure className="subscription__figure">
							<h3 className="heading__text">Free</h3>
							<p className="subHeading__text">For free</p>
							<span className="sub__price">₦0.00</span>
							<ui className="sub__benefits">
								<li className="sub__items">
									<i className="icon subscription__icon fa-solid fa-check"></i>10
									yearly uploads
								</li>
								<li className="sub__items"></li>
								<li className="sub__items"></li>
							</ui>
							<Link className="sub__button" to="/vendor/signup/free">
								Subscribe
							</Link>
						</figure>
						<figure className="subscription__figure card__active">
							<h3 className="heading__text">Standard</h3>
							<p className="subHeading__text">For standard</p>
							<span className="sub__price">₦15,000</span>
							<ui className="sub__benefits">
								<li className="sub__items">
									<i className="icon subscription__icon fa-solid fa-check"></i>50
									yearly uploads
								</li>
								<li className="sub__items">
									<i className="icon subscription__icon fa-solid fa-check"></i>Brand
									Listing
								</li>
								<li className="sub__items"></li>
							</ui>
							<Link className="sub__button" to="/vendor/signup/standard">
								Subscribe
							</Link>
						</figure>
						<figure className="subscription__figure">
							<h3 className="heading__text">Premium</h3>
							<p className="subHeading__text">For premium</p>
							<span className="sub__price">₦20,000</span>
							<ui className="sub__benefits">
								<li className="sub__items">
									<i className="icon subscription__icon fa-solid fa-check"></i>
									Unlimited yearly uploads
								</li>
								<li className="sub__items">
									<i className="icon subscription__icon fa-solid fa-check"></i>Brand
									Listing
								</li>
								<li className="sub__items">
									<i className="icon subscription__icon fa-solid fa-check"></i>Product
									listing
								</li>
							</ui>
							<Link className="sub__button" to="/vendor/signup/premium">
								Subscribe
							</Link>
						</figure>
					</div>
				</div>
			</main>
		</>
	);
}

export default index;
