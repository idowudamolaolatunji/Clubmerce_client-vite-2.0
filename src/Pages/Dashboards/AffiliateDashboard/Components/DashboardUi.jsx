import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { MdOutlineDashboard, MdOutlineLogout } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { TfiCup } from "react-icons/tfi";
import { GrTransaction, GrDocumentPerformance, GrPerformance } from "react-icons/gr";
import { RxHamburgerMenu, RxMagnifyingGlass } from "react-icons/rx";
import { RiCloseFill } from "react-icons/ri";
import Logo from "../../../../Assets/img/logo-removebg.png";
import FavLogo from "../../../../Assets/img/favicon.png";
import "../../../../Assets/css/dashboard.css";
import "../../../../Assets/css/query_dashboard.css";
import "../../../../Assets/css/chats.css";
import AuthFooter from "../../../../Components/Footers/AuthFooter";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiChatsTeardropBold } from "react-icons/pi";
import { useAuthContext } from "../../../../Context/AuthContext";

function DashboardUi({ children }) {
	const [menuIsOpen, setMenuIsOpen] = useState(function () {
		return JSON.parse(localStorage.getItem("menu"));
	});
	const [showProfileDropDown, setShowProfileDropDown] = useState(false);
	const [showNotificationDropDown, setShowNotificationDropDown] = useState(false);
	const [message, setMessage] = useState("");
	const [notifications, setNotifications] = useState([]);

	const location = useLocation();
	const { user } = useAuthContext();

	function handleToggleMenu() {
		setMenuIsOpen(!menuIsOpen);
	}

	function handleToggoleProfile() {
		setShowProfileDropDown(!showProfileDropDown);
	}
	function handleToggoleNotification() {
		setShowNotificationDropDown(!showNotificationDropDown);
	}

	useEffect(
		function () {
			JSON.stringify(localStorage.setItem("menu", menuIsOpen));
		},
		[menuIsOpen],
	);

	// useEffect(function () {
	// 	function handleUnShowDropDown() {}
	// 	document.addEventListener("click", handleUnShowDropDown);

	// 	return function () {
	// 		document.removeEventListener("click", handleUnShowDropDown);
	// 	};
	// }, []);

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

	console.log(`http://localhost:3000/public/asset/users/${user.image}`);

	return (
		<section className="section__dashboard">
			<div className="section__top">
				<div className="nav__logo">
					{!menuIsOpen ? (
						<RxHamburgerMenu className="icon nav__icon" onClick={handleToggleMenu} />
					) : (
						<RiCloseFill className="icon nav__icon" onClick={handleToggleMenu} />
					)}
					<Link to="/affiliates/dashboard">
						<img className="logo" src={Logo} alt="clubmerce logo" />
					</Link>
					<Link to="/affiliates/dashboard">
						<img className="logo-small" src={FavLogo} alt="clubmerce logo" />
					</Link>
				</div>
				<nav className="navbar">
					{/* {location.pathname.includes("marketPlace") && (
						<form className="nav__search">
							<input className="nav__input" type="search" placeholder="search..." />
							<button className="search__button" type="submit">
								<RxMagnifyingGlass className="icon nav__icon" data-digits="0" />
							</button>
						</form>
					)} */}

					<span className="nav__icons">
						<span className="notification__icon" onClick={handleToggoleNotification}>
							<IoNotificationsOutline className="icon nav__icon" data-digits={0} />
						</span>

						{showNotificationDropDown && (
							<div className="notification__hovered">
								<h3 className="dashboard__heading">Notification</h3>
								<div className="notification">
									{notifications.length === 0 && (
										<div className="notify__details">
											<p className="notification__content">
												{"You have no notifications."}
											</p>
										</div>
									)}

									{notifications &&
										notifications.length > 0 &&
										notifications.map((notification) => {
											return (
												<div className="notify__details">
													<span
														className={`color--${
															notification.isActive
																? "active"
																: "inactive"
														} notify__status`}
													>
														&nbsp;
													</span>
													<span
														style={`${
															!notification.isActive
																? "color: #aaa;"
																: ""
														}`}
													>
														<h4 className="notify__head">
															{notification.message}
														</h4>
														<span
															className="notify__body-box"
															style={`${
																!notification.isActive
																	? "color: #aaa;"
																	: ""
															}`}
														>
															<p className="notify__body">
																From Admin
															</p>
															<p className="notify__date">
																{notification.notifiedAt}
															</p>
														</span>
													</span>
												</div>
											);
										})}
								</div>
							</div>
						)}

						<span>
							<div className="nav__image--box" onClick={handleToggoleProfile}>
								<img
									className="nav__image"
									src={`http://localhost:3000/asset/img/users/${user.image}`}
									alt="user's photo"
								/>
							</div>

							{showProfileDropDown && (
								<div className="Profile__hovered">
									<div className="profile__content">
										<div className="profile__owner">
											<div className="profile__image--box">
												<img
													className="profile__image"
													src="/asset/img/users/"
													alt="user's photo"
												/>
											</div>
											<p className="profile__name">{user.fullName}</p>
										</div>
										<Link
											className="profile__link nav__link"
											to="/affiliates/profile"
										>
											My profile
										</Link>
										<button className="profile__button order-nav__link nav__logout">
											signout&nbsp;
											<MdOutlineLogout className="profile__icon" />
										</button>
									</div>
								</div>
							)}
						</span>
					</span>
				</nav>
			</div>

			{/*  */}

			<div className={`section__bottom ${!menuIsOpen ? "close" : "open"}`}>
				<menu className="menubar">
					<div className="menu__body">
						<ul className="menu__list">
							<li className="menu__item">
								<Link
									className={`menu__link ${
										location.pathname === "/affiliates/dashboard"
											? "menu__link--active"
											: ""
									}`}
									to="/affiliates/dashboard"
								>
									<MdOutlineDashboard className="icon menu__icon" />
									<p>Dashboard</p>
								</Link>
							</li>
							<li className="menu__item">
								<Link
									className={`menu__link ${
										location.pathname === "/affiliates/marketplace"
											? "menu__link--active"
											: ""
									}`}
									to="/affiliates/marketplace"
								>
									<BsShop className="icon menu__icon" />
									<p>Affiliate Marketplace</p>
								</Link>
							</li>
							<li className="menu__item">
								<Link
									className={`menu__link ${
										location.pathname === "/affiliates/leaderboard"
											? "menu__link--active"
											: ""
									}`}
									to="/affiliates/leaderboard"
								>
									<TfiCup className="icon menu__icon" />
									<p>Affiliate Leaderboard</p>
								</Link>
							</li>
							<li className="menu__item">
								<Link
									className={`menu__link ${
										location.pathname === "/affiliates/performance"
											? "menu__link--active"
											: ""
									}`}
									to="/affiliates/performance"
								>
									<GrDocumentPerformance className="icon menu__icon" />
									<p>My Performance</p>
								</Link>
							</li>
							<li className="menu__item">
								<Link
									className={`menu__link ${
										location.pathname === "/affiliates/transactions"
											? "menu__link--active"
											: ""
									}`}
									to="/affiliates/transactions"
								>
									<GrTransaction className="icon menu__icon" />
									<p>Transactions</p>
								</Link>
							</li>
							<li className="menu__item">
								<Link
									className={`menu__link ${
										location.pathname === "/affiliates/settings"
											? "menu__link--active"
											: ""
									}`}
									to="/affiliates/settings"
								>
									<GrPerformance className="icon menu__icon" />
									<p>Settings</p>
								</Link>
							</li>
						</ul>
					</div>

					<div className="menu__bottom">
						<ul className="menu__list">
							<li className="menu__item">
								<Link
									className={`menu__link ${
										location.pathname === "/affiliates/profile"
											? "menu__link--active"
											: ""
									}`}
									to="/affiliates/profile"
								>
									<img
										className="menu__profile-image"
										src="/asset/img/users"
										alt="user's photo"
									/>
									<p>profile</p>
								</Link>
							</li>
							<li className="menu__item">
								<button className="menu__button menu__logout">
									signout&nbsp;
									<MdOutlineLogout />
								</button>
							</li>
						</ul>
					</div>
				</menu>

				<main className="main__dashboard">
					<div className="dashboard__content">{children}</div>

					<AuthFooter />
				</main>
			</div>

			{location.pathname !== "/affiliates/chats" && (
				<Link
					className="chat__box-toggler"
					to="/affiliates/chats"
					data-id=""
					data-fullname=""
					data-img=""
				>
					<span className="material-symbols-rounded">
						<PiChatsTeardropBold className="chat__icon" />
						Chat
					</span>
				</Link>
			)}
		</section>
	);
}

export default DashboardUi;
