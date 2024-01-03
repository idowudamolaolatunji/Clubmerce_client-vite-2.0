import React from "react";

import Jambo from '../../../Assets/img/jambo.png'
import VA from '../../../Assets/img/va.png'
import NeoVercity from '../../../Assets/img/neovacity_blue.png'
import FarmVault from '../../../Assets/img/farm-vault.png'
import Brandlogo from '../../../Assets/img/brand_logo.png'

function BrandsSection() {
	return (
		<section className="section brands__section">
			<div className="section__container">
				<h2 className="section__heading--secondary center">Our Featured Brands</h2>
				<div className="brands">
					<span className="brands__logo">
						<img src={Jambo} alt={Jambo} />
					</span>
					<span className="brands__logo">
						<img src={VA} alt={VA} />
					</span>
					<span className="brands__logo">
						<img src={NeoVercity} alt={NeoVercity} />
					</span>
					<span className="brands__logo">
						<img src={FarmVault} alt={FarmVault} style={{ height: '10rem' }} />
					</span>
					<span className="brands__logo">
						<img src={Brandlogo} alt={Brandlogo} />
					</span>
				</div>
			</div>
		</section>
	);
}

export default BrandsSection;
