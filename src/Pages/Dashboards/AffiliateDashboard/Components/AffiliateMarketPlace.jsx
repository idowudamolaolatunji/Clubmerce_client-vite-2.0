import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../Assets/img/logo-removebg.png";
import "../../../../Assets/css/dashboard.css";
import "../../../../Assets/css/query_dashboard.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaArrowLeft } from "react-icons/fa6";
import { useAuthContext } from "../../../../Context/AuthContext";
import ProductCard from "./ProductCard";
import AuthFooter from "../../../../Components/Footers/AuthFooter";
import MainSpinner from "../../../../Components/MainSpinner";
import FavLogo from "../../../../Assets/img/favicon.png";



function AffiliateMarketPlace() {
	const [showProfileDropDown, setShowProfileDropDown] = useState(false);
	const [products, setProducts] = useState([]);
    const [productCategory, setProductCategory] = useState('');
    const [productBasedOnCategory, setProductBasedOnCategory] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { user, token } = useAuthContext();
    const categoryOnStart = location.pathname.split('/').at(-1);
    // console.log(location.pathname.split('/').at(-1))

    const categoryCounts = {
        all: products.length,
        arts: products.filter(product => product.category === 'arts').length,
        betting: products.filter(product => product.category === 'betting').length,
        books: products.filter(product => product.category === 'books').length,
        business: products.filter(product => product.category === 'business').length,
        computers: products.filter(product => product.category === 'computers').length,
        cooking: products.filter(product => product.category === 'cooking').length,
        'e-business-and-e-marketing': products.filter(product => product.category === 'e-business-and-e-marketing').length,
        education: products.filter(product => product.category === 'education').length,
        entertainment: products.filter(product => product.category === 'entertainment').length,
        'food-and-Wine': products.filter(product => product.category === 'food-and-Wine').length,
        games: products.filter(product => product.category === 'games').length,
        'green-products': products.filter(product => product.category === 'green-products').length,
        'health-and-fitness': products.filter(product => product.category === 'health-and-fitness').length,
        'home-and-garden': products.filter(product => product.category === 'home-and-garden').length,
        internet: products.filter(product => product.category === 'internet').length,
        investing: products.filter(product => product.category === 'investing').length,
        jobs: products.filter(product => product.category === 'jobs').length,
        languages: products.filter(product => product.category === 'languages').length,
        reciepe: products.filter(product => product.category === 'reciepe').length,
        'parenting-and-Families': products.filter(product => product.category === 'parenting-and-Families').length,
        'self-Help': products.filter(product => product.category === 'self-Help').length,
        sports: products.filter(product => product.category === 'sports').length
    };

	useEffect(function () {
		async function fetchProducts() {
			setIsLoading(true);
			try {
				const res = await fetch("http://localhost:3000/api/products/marketplace-products", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				});
				if (!res.json) throw new Error("Something went wrong!");
				const data = await res.json();

				if (data.status !== "success") {
					throw new Error(data.message);
				}
                setProductBasedOnCategory([]);
				setProducts(data.data.products);
			} catch (err) {
				console.log(err.message);
			} finally {
				setIsLoading(false);
			}
		}
		fetchProducts();
	}, []);


	function handleToggoleDropDowwn() {
		setShowProfileDropDown(!showProfileDropDown);
	}


    useEffect(function() {
        async function fecthProductsByCategory() {
            try {
                setIsLoading(true);
                console.log(productCategory)

                const res = await fetch(`http://localhost:3000/api/products/niche/${categoryOnStart || productCategory}`, {
                    method: 'GET',
                    headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
                });
                if (!res.json) throw new Error("Something went wrong!");
				const data = await res.json();
                console.log(res, data)

				if (data.status !== "success") {
					throw new Error(data.message);
				}
                setProductBasedOnCategory(data.data.products)

            } catch(err) {
                console.log(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        fecthProductsByCategory();
    }, [productCategory]);

	return (
		<section className="section__dashboard">
			<div className="section__top margin__left--sm">
				<span>
					<Link href="/affiliates/dashboard">
						<img className="logo" src={Logo} alt="clubmerce logo" />
					</Link>
					<Link to="/affiliates/dashboard">
						<img className="logo-small" src={FavLogo} alt="clubmerce logo" />
					</Link>
				</span>
				<nav className="navbar">
					<form className="nav__search">
						<input className="nav__input" type="search" placeholder="search..." />
						<button className="search__button" type="submit">
							<HiMagnifyingGlass className="icon nav__icon" />
						</button>
						<div id="search-result" />
					</form>

					<span className="nav__icons">
						<span>
							<div className="nav__image--box" onClick={handleToggoleDropDowwn}>
								<img
									className="nav__image"
									src="/asset/img/users/"
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
											<p className="profile__name" />
										</div>
										<a className="profile__link nav__link" href="/profile">
											My profile
										</a>
										<button className="profile__button nav__link nav__logout">
											signout&nbsp;
											<i className="fa-solid fa-arrow-right-to-bracket profile__icon" />
										</button>
									</div>
								</div>
							)}
						</span>
					</span>
				</nav>
			</div>

			<main className="main__dashboard">
				<div className="dashboard__content">
					<h3 className="dashboard__heading">
						<Link className="go-back" to="/affiliates/dashboard">
							<FaArrowLeft className="font-size-sm-help margin__r-help" />
						</Link>
						Clubmerce Marketplace
					</h3>

					<>
						<span className="product__filtering-btn">
							<select className="select__input" id="select" data-user="">
								<option value="all">All</option>
								<option value="most-promoted">Most promoted</option>
								<option value="gravity-high-low">Gravity : High-low</option>
								<option value="commission-high-low">High commission </option>
								<option value="gravity-low-high">Gravity : Low-high</option>
								<option value="physical-product">Physical products</option>
								<option value="recurring-commission">Recurring commission</option>
								<option value="commission-low-high">Low commission</option>
								<option value="digital-product">Digital products</option>
								<option value="least-promoted">Less promoted</option>
							</select>
						</span>
						<div className="products__container">
							<aside className="product__filtering">
								<form className="product__filter form__item">
									<label className="form__label" htmlFor="select">
										Sort results by
									</label>
									<select className="select__input" id="select" data-user={user}>
										<option value="all">All</option>
										<option value="most-promoted">Most promoted</option>
										<option value="gravity-high-low">Gravity : High-low</option>
										<option value="commission-high-low">High commission</option>
										<option value="gravity-low-high">Gravity : Low-high</option>
										<option value="physical-product">Physical products</option>
										<option value="recurring-commission">
											Recurring commission
										</option>
										<option value="commission-low-high">Low commission</option>
										<option value="digital-product">Digital products</option>
										<option value="least-promoted">Less promoted</option>
									</select>
								</form>
								<div className="product__category">
									<p>catergories</p>
									<ul className="catergory__list">
										
                                        {Object.entries(categoryCounts).map(([category, count]) => (
                                            <Link to={`${category === 'all' ? '/affiliates/marketplace' : `/affiliates/marketplace/${category}` }`}>
                                                <li key={category} className="category__item" onClick={() => setProductCategory(category)}>
                                                    {category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')} ({count})
                                                </li>
                                            </Link>
                                        ))}

									</ul>
								</div>
							</aside>

							<span>
								<h6 className="dashboard__subheading">Top offers</h6>
								<p className="figures">Total {location.pathname === '/affiliates/marketplace' ? products.length : productBasedOnCategory.length}</p>

								<div className="products__cards--box">
									{isLoading && <MainSpinner />}
                                    {productBasedOnCategory ? productBasedOnCategory.map((product) => (
                                        <ProductCard
                                            product={product}
                                            key={product._id}
                                            id={product._id}
                                        />
                                    )) : productBasedOnCategory.length === 0 && (<p>No product found..</p>)}
                                    {(location.pathname === '/affiliates/marketplace' && products) ? products.map((product) => (
                                        <ProductCard
                                            product={product}
                                            key={product._id}
                                            id={product._id}
                                        />
                                    )) : products.length === 0 && (<p>No product found..</p>)}
								</div>
							</span>
						</div>
					</>
					<AuthFooter />
				</div>
			</main>
		</section>
	);
}

export default AffiliateMarketPlace;
