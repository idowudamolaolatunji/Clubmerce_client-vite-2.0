import React from "react";

import SVG1 from '../../../Assets/svg/svg1.svg';
import SVG2 from '../../../Assets/svg/svg2.svg';

import HeroImg from '../../../Assets/img/clubmerce_hero.png';

function HeroSection() {
	return (
		<section className="section hero__section">
			<img className="hero__svg svg1" src={SVG1} alt={SVG1} />
			<img className="hero__svg svg2" src={SVG2} alt={SVG2} />
			<div className="section__container hero">
				<div className="section__heading hero__heading">
					<h1 className="section__heading--primary">
						Unleash Your
						<div className="primary--extra"> Earning Potentials.</div>
					</h1>
					<h3 className="section__heading--tetrary lsp">
						With our cutting-edge platform, one established affiliate marketing
						ecosystem, to achieve intelligent, scalable, and sustainable growth, and
						watch your revenue soar to new heights!
					</h3>
					<div className="hero__button--container">
						<a
							className="section__button btn hero__button main__button"
							href="/get-started"
						>
							Get started
						</a>
						<a className="section__button hero__button outline__button" href="#how">
							Learn more
						</a>
					</div>
				</div>
				<div className="hero__image--box">
					<img className="hero__image bbbb" src={HeroImg} alt={HeroImg} />
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
