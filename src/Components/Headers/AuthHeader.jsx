import React, { useEffect, useState } from "react";



import Logo from '../../Assets/img/logo-removebg.png';
import { NavLink, useLocation } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

function AuthHeader() {
    const location = useLocation();
	const { token } = useAuthContext();


	return (
		<header className="header header--positioned">
			<div className="logo--box">
				<NavLink to="/">
					<img className="logo" src={Logo} alt={Logo} />
				</NavLink>
			</div>
			<nav className="navar">
				<button className="navigation-controls">
					<i className="fa-solid fa-bars navigation-icon"></i>
				</button>
				<ul className="nav__list">
					<li className="nav__item">
						<NavLink className={`nav__link ${location.pathname === '/' ? 'nav__active' : ''}`} to="/">
							Home
						</NavLink>
					</li>
					<li className="nav__item">
						<NavLink className={`nav__link ${location.pathname === '/get-started' ? 'nav__active' : ''}`} to="/get-started">
							Get started
						</NavLink>
					</li>
					<li className="nav__item">
						<NavLink className={`nav__link ${location.pathname === '/affiliate-resourses' ? 'nav__active' : ''}`} to="/affiliate-resourses">
							Affiliate
						</NavLink>
					</li>
					<li className="nav__item">
						<NavLink className={`nav__link ${location.pathname === '/vendor-resourses' ? 'nav__active' : ''}`} to="/vendor-resourses">
							Vendor
						</NavLink>
					</li>
					<li className="nav__item">
                        {!token ?
                            <NavLink className={`nav__link nav__button nav-sign ${location.pathname === '/login' ? 'nav__button--active' : ''}`} to="/login">
                                login
                            </NavLink>

                        : 
                            <NavLink className={`nav__link nav__button nav-sign nav__button--active`} to="/dashboard"> 
                                Dashboard
                            </NavLink>
                        }
					</li>
				</ul>
				<ul className="nav__list-m">
					<li className="nav__item">
						<a className="nav__link" href="/">
							Home
						</a>
					</li>
					<li className="nav__item">
						<a className="nav__link" href="/get-started">
							Get started
						</a>
					</li>
					<li className="nav__item">
						<a className="nav__link" href="/affiliate-resourses">
							Affiliate
						</a>
					</li>
					<li className="nav__item">
						<a className="nav__link" href="/vendor-resourses">
							Vendor
						</a>
					</li>
					<span className="flexible">
						<li className="nav__item">
							<a className="nav__link nav__button nav-sign" href="/login">
								login
							</a>
						</li>
						<li className="nav__item">
							<a className="nav__link nav-login" href="/contact-us">
								contact us
							</a>
						</li>
					</span>
					<li className="footer__item footer__icon--grid">
						<a className="footer__link" href="#">
							<i className="fa-brands fa-facebook-f nav__icon icon"></i>
						</a>
						<a className="footer__link" href="#">
							<i className="fa-brands fa-twitter nav__icon icon"></i>
						</a>
						<a className="footer__link" href="#">
							<i className="fa-brands fa-instagram nav__icon icon"></i>
						</a>
						<a className="footer__link" href="#">
							<i className="fa-brands fa-youtube nav__icon icon"></i>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default AuthHeader;
