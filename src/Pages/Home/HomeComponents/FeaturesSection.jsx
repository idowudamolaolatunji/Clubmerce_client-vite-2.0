import React from "react";

import { BsTransparency } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineAccountBalance } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { LiaShippingFastSolid } from "react-icons/lia";


function FeaturesSection() {
	return (
		<section className="section section__features">
			<div className="section__container features">
				<div className="features__card">
					<span className="features__icons">
						<BsTransparency className="features__icon" />
					</span>
					<p className="features__text">Transparent Product Marketplace</p>
				</div>

				<div className="features__card">
					<span className="features__icons">
						<RiSecurePaymentFill className="features__icon" />
					</span>
					<p className="features__text">Reliable and Integrated Payments</p>
				</div>

				<div className="features__card">
					<span className="features__icons">
						<BiSolidOffer className="features__icon" />
					</span>
					<p className="features__text">Top Performing Offers</p>
				</div>

				<div className="features__card">
					<span className="features__icons">
						<MdOutlineAccountBalance className="features__icon" />
					</span>
					<p className="features__text">Personalized Account Management</p>
				</div>

				<div className="features__card">
					<span className="features__icons">
						<VscWorkspaceTrusted className="features__icon" />
					</span>
					<p className="features__text">Trusted and Registered</p>
				</div>

				<div className="features__card">
					<span className="features__icons">
						<LiaShippingFastSolid className="features__icon" />
					</span>
					<p className="features__text">Fast Selling Product</p>
				</div>
			</div>
		</section>
	);
}

export default FeaturesSection;
