import React from "react";

import Logo from '../../Assets/img/logo-white.png'
import Android from '../../Assets/img/android.png'
import Iphone from '../../Assets/img/iphone.png'

import { MdLocalPhone, MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";


function MainFooter() {
	return (
		<>
			<footer className="footer">
				<div className="footer__grid">
					<div className="footer__company">
						<div className="logo--box">
							<img className="footer__logo" src={Logo} alt={Logo} />
						</div>
						<p className="footer__description">
							We provide tools a platform for vendors to create marketable products
							and for affiliates to join those programs, generate unique tracking
							links, and track their performance and earnings
						</p>
						<div className="footer__download">
							<a href="#" download="download">
								<img
									className="footer__download--image"
									src={Android}
									alt="android download"
								/>
							</a>
							<a href="#" download="download">
								<img
									className="footer__download--image"
									src={Iphone}
									alt="iphone download"
								/>
							</a>
						</div>
					</div>
					<div className="footer__contact--info">
						<span>
							<p className="footer__heading">Contact Info</p>
							<ul className="footer__list">
								<li className="footer__item">
									<a className="footer__link" href="tel:234912345678">
										<MdLocalPhone className="footer__icon icon" />
										0023338888
									</a>
								</li>
								<li className="footer__item">
									<a className="footer__link" href="mailto:info@clubmerce.com">
										<MdOutlineEmail className=" footer__icon icon" />
										info@clubmerce.com
									</a>
								</li>
								<li className="footer__item footer__icon--grid">
									<a className="footer__link" href="#">
										<FaFacebookF className="footer__icon icon" />
									</a>
									<a className="footer__link" href="#">
										<BsTwitterX className="footer__icon icon" />
									</a>
									<a className="footer__link" href="#">
										<FaInstagram  className="footer__icon icon" />
									</a>
									<a className="footer__link" href="#">
										<FaYoutube className="footer__icon icon" />
									</a>
								</li>
							</ul>
						</span>
						<span>
							<div className="footer__links--list">
								<p className="footer__heading">Links</p>
								<ul className="footer__list">
									<li className="footer__item">
										<Link className="footer__link" to="/get-started">
											Get started
										</Link>
									</li>
									<li className="footer__item">
										<Link className="footer__link" to="/vendor-resourses">
											Vendors
										</Link>
									</li>
									<li className="footer__item">
										<Link className="footer__link" to="/affiliate-resourses">
											Affiliates
										</Link>
									</li>
									<li className="footer__item">
										<Link className="footer__link" to="/">
											Terms of use
										</Link>
									</li>
								</ul>
							</div>
						</span>
					</div>
					<div className="footer__links--list">
						<p className="footer__heading">Links</p>
						<ul className="footer__list">
							<li className="footer__item">
								<Link className="footer__link" to="/get-started">
									Get started
								</Link>
							</li>
							<li className="footer__item">
								<Link className="footer__link" to="/vendor-resourses">
									Vendors
								</Link>
							</li>
							<li className="footer__item">
								<Link className="footer__link" to="/affiliate-resourses">
									Affiliates
								</Link>
							</li>
							<li className="footer__item">
								<Link className="footer__link" to="/">
									Terms of use
								</Link>
							</li>
						</ul>
					</div>
					<div className="footer__subscribe">
						<div className="footer__form--text">Subscribe to our newsletter</div>
						<form className="footer__form" id="footer__form">
							<div className="footer__form--item">
								<label className="footer__form--label" htmlFor="subscribe">
									Email
								</label>
								<input
									className="footer__form--input"
									name="subscribe"
									required="required"
								/>
								<button className="footer__form--button footer__button" type="submit">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</footer>
			<div className="copyright">
				<p className="copyright__text">copyright &copy; 2023. All rights reserved.</p>
			</div>
		</>
	);
}

export default MainFooter;
