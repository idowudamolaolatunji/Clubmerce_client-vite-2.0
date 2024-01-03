import React from "react";

function TestimonialSection() {
	return (
		<section className="section testimonial__section center">
			<h2 className="section__heading--secondary">Testimonials</h2>
			<div className="container__skew">
				<div className="testimonial__slide swiper">
					<div className="testimonial__slide--item">
						<div className="testimonial__slide--item-text">
							<p className="testimonial__content">
								Clubmerce has been a game-changer for me! As a stay-at-home mom, I
								needed a flexible way to earn income. Thanks to Clubmerce, I started
								promoting products I love and earning commissions
							</p>
							<p className="testimonial__author">Funke.</p>
						</div>
						<div className="testimonial__slide--item-img">
							<img
								className="testimonial__image"
								src="asset/img/pexels-photo-1994818.jpeg"
								alt=""
							/>
						</div>
					</div>
					<div className="testimonial__slide--item">
						<div className="testimonial__slide--item-text">
							<p className="testimonial__content">
								I earn a consistent income by promoting products online. It has
								given me the freedom to work on my own terms and live a life of
								financial abundance. Clubmerce is the real deal!
							</p>
							<p className="testimonial__author">Emeka.</p>
						</div>
						<div className="testimonial__slide--item-img">
							<img className="testimonial__image" src="asset/img/emeka.jpeg" alt="" />
						</div>
					</div>
					<div className="testimonial__slide--item testimonial__slide--active">
						<div className="testimonial__slide--item-text">
							<p className="testimonial__content">
								Clubmerce provided the perfect platform to achieve that. I now
								promote products I genuinely believe in and earn commissions while
								doing what I love.
							</p>
							<p className="testimonial__author">Ngozi.</p>
						</div>
						<div className="testimonial__slide--item-img">
							<img className="testimonial__image" src="asset/img/ngozi.jpeg" alt="" />
						</div>
					</div>
					<div className="testimonial__slide--item">
						<div className="testimonial__slide--item-text">
							<p className="testimonial__content">
								Clubmerce has been a blessing in disguise! As an aspiring
								entrepreneur, I was searching for ways to monetize my online
								presence. When I stumbled upon Clubmerce, I found the perfect
								solution.
							</p>
							<p className="testimonial__author">Ahmed.</p>
						</div>
						<div className="testimonial__slide--item-img">
							<img className="testimonial__image" src="asset/img/face.png" alt="" />
						</div>
					</div>
					<div className="testimonial__slide--item">
						<div className="testimonial__slide--item-text">
							<p className="testimonial__content">
								I never thought making money online could be so rewarding. With
								Clubmerce, I've been able to harness the power of affiliate
								marketing and earn a substantial income.
							</p>
							<p className="testimonial__author">Idowu.</p>
						</div>
						<div className="testimonial__slide--item-img">
							<img className="testimonial__image" src="asset/img/idowu.png" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="controls">
				<button className="prev-btn controls-btn" />
				<button className="next-btn controls-btn" />
			</div>
		</section>
	);
}

export default TestimonialSection;
