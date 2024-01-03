import React from "react";

import Affiliate from "../../../Assets/img/affiliate2_reduced.jpg";
import vendor from "../../../Assets/img/vendor2_reduced.jpg";
import { Link } from "react-router-dom";

function GetStartedSection() {
	return (
		<section className="section get-started__section" id="learn">
			<div className="section__container">
				<div className="section__heading">
					<h2 className="section__heading--secondary center">get started</h2>
					<p className="get-started__heading--text">
						Whether you're looking to start, scale, or expand your business reach,
						Clubmerce can help. Join thousands of sellers and more than 1,000 affiliates
						who are finding success on the Clubmerce platform.
					</p>
				</div>
				<div className="cards">
					<div className="get-started__card get-started__affiliate">
						<img className="get-started__image" src={Affiliate} alt={Affiliate} />
						<div className="get-started__content">
							<p className="get-started__content--title">Become an affiliate</p>
							<p className="get-started__content--text">
								Turn your influence into income and unlock a world of unlimited
								possibilities. Benefit from competitive commissions, exclusive
								resources, and a supportive community.
							</p>
							<Link className="get-started__button btn" to="/affiliate-resourses">
								Get Started
							</Link>
						</div>
					</div>
					<div className="get-started__card get-started__vendor">
						<img className="get-started__image" src={vendor} alt={vendor} />
						<div className="get-started__content">
							<p className="get-started__content--title">Become an vendor</p>
							<p className="get-started__content--text">
								Become a Vendor on Our Marketplace. Join our thriving community of
								vendors and gain access to a global audience hungry for innovative
								products.
							</p>
							<Link className="get-started__button btn" to="/vendor-resourses">
								Get Started
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default GetStartedSection;
