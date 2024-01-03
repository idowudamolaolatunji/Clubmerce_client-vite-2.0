import React from "react";
import AffiliateSignup from "../../Components/Authentication/AffiliateSignup";
import MainFooter from "../../Components/Footers/MainFooter";
import AuthHeader from "../../Components/Headers/AuthHeader";

import Img1 from '../../Assets/img/register.jpg';
import Img2 from '../../Assets/img/familiarise.jpg';
import Img3 from '../../Assets/img/promote_channel.jpg';
import Img4 from '../../Assets/img/compelling.jpg';
import Img5 from '../../Assets/img/track_performance2.jpg';
import Img6 from '../../Assets/img/audience2.jpeg';
import Img7 from '../../Assets/img/relax.jpg';

import '../../Assets/css/otherPages.css';

function index() {
	return (
		<>
		 	<AuthHeader />
			<div className="page__hero affiliate">
				<div className="section__container">
					<div className="page__head--text">
						<h3 className="page--title">Affiliate Resourse</h3>
						<p className="head--text">
							We're excited to have you join us and start earning commissions by
							promoting our products and services. This get started guide will walk
							you through the process of becoming an affiliate and help you get up and
							running in no time.
						</p>
						<a className="content__button" href="#signup">
							Become An Affiliate Now
						</a>
					</div>
				</div>
			</div>

            {/* SECTIONS */}
			<main className="main">
				<section className="page__section">
					<div className="section__container">
						<h3 className="section__title">Welcome to our affiliate program! </h3>
						<div className="get__started--content">
							<div className="content">
								{" "}
								<img
									className="content__image"
									src={Img1}
									alt={Img1}
								/>
								<div className="content__description">
									<h4 className="content__title">
										Step 1: Sign up as an Affiliate
									</h4>
									<p className="section__description">
										{" "}
										To get started, you'll need to sign up for our affiliate
										program. Visit our website and look for the "Affiliate
										Program" or "Become an Affiliate" link. Click on it, and
										you'll be directed to the affiliate registration page. Fill
										out the required information, such as your name, contact
										details, and preferred payment method. Once you submit your
										application, our team will review it, and upon approval,
										you'll receive your unique affiliate ID and login details.
									</p>
								</div>
							</div>
							<div className="content">
								<div className="content__description">
									<h4 className="content__title">
										Step 2: Familiarize Yourself with Our Products/Services
									</h4>
									<p className="section__description">
										{" "}
										To effectively promote our products and services, it's
										essential to have a good understanding of what we offer.
										Take some time to explore our website, learn about our
										offerings, and identify the key features and benefits. This
										knowledge will enable you to create compelling content and
										answer any questions your audience may have.
									</p>
								</div>
								<img
									className="content__image"
									src={Img2}
									alt={Img2}
								/>
							</div>
							<div className="content">
								{" "}
								<img
									className="content__image"
									src={Img3}
									alt={Img3}
								/>
								<div className="content__description">
									<h4 className="content__title">
										Step 3: Choose Your Promotion Channels
									</h4>
									<p className="section__description">
										Consider the channels you have at your disposal to reach
										your audience. It could be your blog, website, social media
										platforms, email newsletters, or any other online medium.
										Think about where your target audience is most active and
										which channels will allow you to engage with them
										effectively. You can also experiment with different channels
										to find what works best for you.
									</p>
								</div>
							</div>
							<div className="content">
								<div className="content__description">
									<h4 className="content__title">
										Step 4: Create Compelling Content
									</h4>
									<p className="section__description">
										Content is key when it comes to affiliate marketing. Develop
										engaging content that educates, entertains, or solves a
										problem for your audience. You can write product reviews,
										create informative blog posts, shoot engaging videos, or
										curate inspiring social media posts. Remember to incorporate
										your affiliate links naturally within your content to drive
										traffic to our website and track your referrals.
									</p>
								</div>
								<img
									className="content__image"
									src={Img4}
									alt={Img4}
								/>
							</div>
							<div className="content">
								{" "}
								<img
									className="content__image"
									src={Img5}
									alt={Img5}
								/>
								<div className="content__description">
									<h4 className="content__title">
										Step 5: Track Your Performance
									</h4>
									<p className="section__description">
										We provide you with a comprehensive affiliate dashboard
										where you can track your performance in real-time. Monitor
										your clicks, conversions, and commission earnings to gauge
										the effectiveness of your promotional efforts. Use these
										insights to optimize your strategies and focus on the
										channels and content types that generate the best results.
									</p>
								</div>
							</div>
							<div className="content">
								<div className="content__description">
									<h4 className="content__title">
										Step 6: Engage with Your Audience
									</h4>
									<p className="section__description">
										Building a relationship with your audience is crucial for
										success as an affiliate. Respond to comments, messages, and
										inquiries promptly. Engage in discussions related to our
										products/services, and be a valuable resource for your
										audience. By establishing yourself as a trusted authority,
										you'll increase the likelihood of conversions and foster
										long-term loyalty.
									</p>
								</div>
								<img
									className="content__image"
									src={Img6}
									alt={Img6}
								/>
							</div>
							<div className="content">
								{" "}
								<img
									className="content__image"
									src={Img7}
									alt={Img7}
								/>
								<div className="content__description">
									<h4 className="content__title">
										{" "}
										Step 7: Stay Updated and Evolve
									</h4>
									<p className="section__description">
										Keep an eye on our latest product launches, promotions, and
										updates. Stay informed about any changes to our affiliate
										program or commission structure. The affiliate marketing
										landscape is always evolving, so it's important to adapt
										your strategies accordingly. Attend webinars, read industry
										blogs, and stay connected with our affiliate program's
										newsletter to stay ahead of the curve.
									</p>
								</div>
							</div>
							<span>
								<p className="section__description">
									Remember, success in affiliate marketing takes time and effort.
									Be patient, persistent, and continuously learn from your
									experiences. We're here to support you along the way, so if you
									have any questions or need assistance, don't hesitate to reach
									out to our dedicated affiliate support team.
								</p>
								<p className="section__description">
									Get started today and embark on an exciting journey as an
									affiliate partner with us. We look forward to helping you
									achieve your goals and rewarding you for your efforts!
								</p>
							</span>
						</div>
					</div>
				</section>



                <div className="signup__form" id="signup">
                    <AffiliateSignup />
                </div>
			</main>

            <MainFooter />
		</>
	);
}

export default index;
