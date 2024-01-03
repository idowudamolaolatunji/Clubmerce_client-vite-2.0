import React from "react";

import Vector1 from "../../../Assets/svg/Authentication-cuate.svg";
import Vector2 from "../../../Assets/svg/Buffer-cuate.svg";
import Vector3 from "../../../Assets/svg/Emails-cuate.svg";
import Line from '../../../Assets/svg/line.svg';

function HowSection() {
	return (
		<section className="section how__section" id="how">
			<div className="section__container relative">
				<div className="section__how--flex">
					<img className="how__steps--line" src={Line} alt={Line} />
					<div className="grid how grid__two grid__align--center">
						<div className="section__image how__section--image how__one">
							<img className="how__image" src={Vector1} alt={Vector1} />
						</div>
						<div className="section__content">
							<h2 className="section__heading--secondary how__heading margin__bottom--md">
								how it works
							</h2>
							<h3 className="section__content--title">Signup As An Affiliate</h3>
							<p className="section__content--text">
								Becoming an affiliate opens doors to a world of possibilities. By
								partnering with our trusted brand, you can leverage your influence
								and network to promote our products and earn attractive commissions.{" "}
							</p>
						</div>
					</div>
					<div className="grid how grid__two grid__align--center">
						<div className="section__content">
							<h3 className="section__content--title">
								Visit The Affiliate MarketPlace
							</h3>
							<p className="section__content--text">
								As an affiliate, you'll gain access to our vibrant marketplace,
								where countless products and services await your promotional
								prowess.
							</p>
						</div>
						<div className="section__image how__section--image how__two">
							<img className="how__image" src={Vector2} alt={Vector2} />
						</div>
					</div>
					<div className="grid how grid__two grid__align--center">
						<div className="section__image how__section--image how__three">
							<img className="how__image" src={Vector3} alt={Vector3} />
						</div>
						<div className="section__content">
							<h3 className="section__content--title">Promote and earn</h3>
							<p className="section__content--text">
								As an affiliate, you'll gain access to a diverse range of products
								and services from top-notch brands. Promote these offerings to your
								audience through various channels such as your website, blog, social
								media platforms, or email newsletters.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HowSection;
