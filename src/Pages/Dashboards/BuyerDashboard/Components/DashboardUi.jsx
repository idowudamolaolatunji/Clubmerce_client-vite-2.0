import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FavLogo from '../../../../Assets/img/favicon.png';
import Logo from '../../../../Assets/img/logo-removebg.png';

import MainDashboard from './MainDashboard';

import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseFill } from "react-icons/ri";
import { MdOutlineDashboard, MdOutlineLogout } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import '../../../../Assets/css/dashboard.css';
import '../../../../Assets/css/query_dashboard.css';
import { PiChatsTeardropBold } from "react-icons/pi";


function DashboardUi({ children }) {
	const [menuIsOpen, setMenuIsOpen] = useState(function () {
		return JSON.parse(localStorage.getItem("menu"));
	});
	const location = useLocation();

	function handleToggleMenu() {
		setMenuIsOpen(!menuIsOpen);
	}

	useEffect(function () {
        JSON.stringify(localStorage.setItem("menu", menuIsOpen));
    },[menuIsOpen],);

	useEffect(function () {
		function handleResize() {
			const newWidth = window.innerWidth;
			if (newWidth <= 600) {
				setMenuIsOpen(false);
			}
		}
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<section className="section__dashboard">
			<div className="section__top">
				<div className="nav__logo">
					{!menuIsOpen ? (
						<RxHamburgerMenu className="icon nav__icon" onClick={handleToggleMenu} />
					) : (
						<RiCloseFill className="icon nav__icon" onClick={handleToggleMenu} />
					)}
					<Link to="/buyers/dashboard">
						<img className="logo" src={Logo} alt="clubmerce logo" />
					</Link>
                    <Link to="/affiliates/dashboard">
						<img className="logo-small" src={FavLogo} alt="clubmerce logo" />
					</Link>
				</div>
				<nav className="navbar">
					<span className="shop-cart">
						<LuShoppingCart className="icon nav__icon shopping-cart" data-digits="0" />
					</span>

					{/* CART */}

					{/*  */}
				</nav>
			</div>

			{/*  */}

			<div className={`section__bottom ${!menuIsOpen && "close"}`}>
				<menu className="menubar">
					<div className="menu__body">
						<ul className="menu__list">
							<li className="menu__item">
                                <Link className={`menu__link ${location.pathname === '/buyers/dashboard' ? 'menu__link--active' : ''}`} to="/buyers/dashboard">
									<MdOutlineDashboard className="icon menu__icon" />
									<p>Dashboard</p>
								</Link>
							</li>
						</ul>
					</div>

					<div className="menu__bottom">
						<ul className="menu__list">
							<li className="menu__item">
                                <Link className={`menu__link ${location.pathname === '/buyers/profile' ? 'menu__link--active' : ''}`} to="/buyers/profile">
									<img
										className="menu__profile-image"
										src="/asset/img/users"
										alt="user's photo"
									/>
									<p>profile</p>
								</Link>
							</li>
							<li className="menu__item">
								<button className="menu__button buyer__menu--logout">
									signout&nbsp;
									<MdOutlineLogout />
								</button>
							</li>
						</ul>
					</div>
				</menu>

                <main class="main__dashboard">
                    <div class="dashboard__content">
                        {children}
                    </div>
                </main>
			</div>

            {location.pathname !== '/buyers/chats' && 
                <Link
                    className="chat__box-toggler"
                    to="/buyers/chats"
                    data-id=""
                    data-fullname=""
                    data-img=""
                >
                    <span className="material-symbols-rounded">
                        <PiChatsTeardropBold className="chat__icon" />
                        Chat
                    </span>
                </Link>
            }
		</section>
	);
}

export default DashboardUi;
