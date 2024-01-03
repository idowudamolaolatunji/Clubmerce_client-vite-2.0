import React, { Children, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import MainDashboard from './MainDashboard';

import FavLogo from '../../../../Assets/img/favicon.png';
import Logo from '../../../../Assets/img/logo-removebg.png';
import { GrDocumentPerformance, GrPerformance, GrTransaction } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";
import { TfiCup } from "react-icons/tfi";
import { RiStackLine, RiCloseFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineLogout } from "react-icons/md";

import '../../../../Assets/css/dashboard.css';
import '../../../../Assets/css/query_dashboard.css';
import { PiChatsTeardropBold } from 'react-icons/pi';

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
                    { !menuIsOpen ?
                        <RxHamburgerMenu className="icon nav__icon" onClick={handleToggleMenu} />
                    :
                        <RiCloseFill className="icon nav__icon" onClick={handleToggleMenu} />
                    }
					<Link to="/vendorss/dashboard">
						<img className="logo" src={Logo} alt="clubmerce logo" />
					</Link>
					<Link to="/vendorss/dashboard">
						<img className="logo-small" src={FavLogo} alt="clubmerce logo" />
					</Link>
				</div>
				<nav className="navbar">


                    {/*  */}
                </nav>
			</div>


            <div className={`section__bottom ${!menuIsOpen ? 'close' : 'open'}`}>
				<menu className="menubar">
					<div className="menu__body">
						<ul className="menu__list">

                            <li className="menu__item">
                                <Link className={`menu__link ${location.pathname === '/vendors/dashboard' ? 'menu__link--active' : ''}`} to="/vendors/dashboard">
                                    <MdOutlineDashboard className="icon menu__icon" />
                                    <p>Dashboard</p>
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link className={`menu__link ${location.pathname === '/vendors/marketplace' ? 'menu__link--active' : ''}`} to="/vendors/product-catalogue">
                                    <RiStackLine className="icon menu__icon" />
                                    <p>Product Catalogue</p>
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link className={`menu__link ${location.pathname === '/vendors/performance' ? 'menu__link--active' : ''}`} to="/vendors/performance">
                                    <GrDocumentPerformance className="icon menu__icon" />
                                    <p>Product Performance</p>
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link className={`menu__link ${location.pathname === '/vendors/leaderboard' ? 'menu__link--active' : ''}`} to="/vendors/leaderboard">
                                    <TfiCup className="icon menu__icon" />
                                    <p>Vendors Leaderboard</p>
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link className={`menu__link ${location.pathname === '/vendors/transactions' ? 'menu__link--active' : ''}`} to="/vendors/transactions">
                                    <GrTransaction className="icon menu__icon" />
                                    <p>Transactions</p>
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link className={`menu__link ${location.pathname === '/vendors/settings' ? 'menu__link--active' : ''}`} to="/vendors/settings">
                                    <GrPerformance className="icon menu__icon" />
                                    <p>Settings</p>
                                </Link>
                            </li>
                        </ul>
					</div>

					<div className="menu__bottom">
						<ul className="menu__list">
							<li className="menu__item">
                                <Link className={`menu__link ${location.pathname === '/vendors/profile' ? 'menu__link--active' : ''}`} to="/vendors/profile">
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

                <main class="main__dashboard">
                    <div class="dashboard__content">
                        {children}
                    </div>
                </main>
			</div>

			{location.pathname !== '/vendors/chats' && 
                <Link
                    className="chat__box-toggler"
                    to="/vendors/chats"
                    data-id=""
                    data-fullname=""
                    data-img=""
                >
                    <span className="material-symbols-rounded">
                        <PiChatsTeardropBold className='chat__icon' />
                        Chat
                    </span>
                </Link>
            }
		</section>
  )
}

export default DashboardUi;
