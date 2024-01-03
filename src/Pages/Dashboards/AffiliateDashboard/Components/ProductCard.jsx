import React, { useState } from "react";
import { useAuthContext } from "../../../../Context/AuthContext";
import { numberFormatter } from "../../../../utils/helper";
import GetHopLinkModal from "./GetHopLinkModal";
import CopyHopLinkModal from "./CopyHopLinkModal";
import { AiFillCheckCircle, AiFillExclamationCircle } from "react-icons/ai";
import Alert from "../../../../Components/Alert";
import MainSpinner from "../../../../Components/MainSpinner";
import { Link } from "react-router-dom";

function ProductCard({ product, id }) {
    const [showHoplinkModal, setShowHoplinkModal] = useState(false);
    const [showCopyModal, setShowCopyModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [link, setLink] = useState("");
    const { user, token } = useAuthContext();

    function handleShowModal() {
        setShowHoplinkModal(true);
    }

    function handleReset() {
        setMessage("");
        setIsError(false);
        setIsSuccess(false);
    }

    function handleError(mess) {
        setIsError(true);
        setMessage(mess);
        setTimeout(() => {
            setIsError(false);
            setMessage("");
        }, 2000);
    }

    function copyInput() {
        navigator.clipboard.writeText(link);
        setIsSuccess(true);
        setMessage("Copied Hoplink!");
        setTimeout(() => {
            setIsSuccess(false);
            setMessage("");
            // setShowCopyModal(false)
        }, 2000);
    }

    async function handleHoplinkGeneration(e) {
        try {
            e.preventDefault();
            setIsLoading(true);
            handleReset();

            const res = await fetch(
                `http://localhost:3000/api/promotion/generate-affiliate-link/${product.slug}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ username: user.username }),
                },
            );
            console.log(res);

            if (!res.ok) {
                throw new Error("Something went wrong, Check connection!");
            }
            const data = await res.json();
            if (data.status !== "success") {
                throw new Error(data.message);
            }

            setMessage("Hoplink Generated Successfully!");
            setShowCopyModal(true);
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                setMessage("");
                setShowHoplinkModal(false);
            }, 2000);

            setLink(data.data.link);
        } catch (err) {
            handleError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {isLoading && <MainSpinner />}
            {showHoplinkModal && (
                <GetHopLinkModal
                    handleHoplinkGeneration={handleHoplinkGeneration}
                    setShowHoplinkModal={setShowHoplinkModal}
                />
            )}
            {(!showHoplinkModal && showCopyModal) && (
                <CopyHopLinkModal
                    handleOnCopy={copyInput}
                    link={link}
                    setShowCopyModal={setShowCopyModal}
                />
            )}

            <div className={`product__card ${product.isBoosted ? 'promoted' : ''}`}>
                <div className="product__side--left">   
                    <div className="side--top">
                        <div className="product__image--container">
                            <img className="product__image" src={`http://localhost:3000/asset/img/products/${product.image}`} alt={product.name} />
                        </div>
                        <div className="product__heading"> 
                            <h2 className="product__title">{product.name}</h2>
                            <span className="product__npInfo">
                                <p className="product__niche">{product.niche}</p>
                                <span>|</span>
                                <p className="product__price">₦{numberFormatter(product.price)}</p>
                            </span>
                            <button className="product__message person">
                                <i className="fa-solid fa-envelope icon"></i>
                                Chat vendor
                            </button>
                            <div className="product__content">
                                <h4 className="product__description">{product.summary}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="side--bottom">
                        <ul className="product__info">
                            <li className="product__info--item"> <i className="fa-solid ${product.type === 'Digital' ? 'fa-file' : 'fa-truck-fast'} product__icon icon"></i>{product.type} Product</li>
                            <li className="product__info--item"> <i className="fa-solid fa-tools product__icon icon"></i>Affiliate tools</li>
                            <li className="product__info--item"> <i className="fa-solid fa-link product__icon icon"></i>Unique Link</li>
                            <li className="product__info--item"> <i className="fa-regular fa-square-check product__icon icon"></i>Approved</li>
                            {product.recurringCommission ? <li className="product__info--item">
                                <i className="fa-solid fa-rotate product__icon icon" />
                                Recurring
                            </li> : ''}
                        </ul>
                    </div>
                </div>
                <div className="product__side--right">
                    <span className="product__commission">
                        <p className="commision">avg commission</p>
                        <span className="commission__amount">{product.commissionPercentage}%</span>
                        <p className="commission__percent">₦{numberFormatter(product.commissionAmount)}</p>
                    </span>
                    <button className="btn product__button promote" onClick={handleShowModal}>Promote</button>
                    <a className="product__button page" target="_blank" href="/marketplace/${product.slug}">affiliate page</a>
                </div>
            </div>



            <figure className="product__card-mobile">
                <div className="product__side front ${product.isBoosted ? 'promoted-m' : ''}">
                    <div className="front--top">
                        <div className="product__image--container">
                            <img className="product__image" src={`http://localhost:3000/asset/img/products/${product.image}`} alt={product.name} />
                        </div>
                        <div className="product__heading">
                            <h2 className="product__title">{product.name}</h2>
                            <button className="produt__message-m person">
                                <i className="fa-solid fa-envelope icon product__icon" />
                            </button>
                            <div className="product__content">
                                <h4 className="product__description">{product.summary}...</h4>
                                <a className="product__button page margin__bottom--xsm" target="_blank" href="/marketplace/${product.slug}">affiliate page</a>
                            </div>
                        </div>
                    </div>
                    <div className="front--bottom">
                        <ul className="product__info">
                            <li className="product__info--item">
                                <i className="fa-solid product__icon icon ${product.type !== 'Digital' ? 'fa-truck-fast' : 'fa-file'}"></i>
                                <p>{product.type} Product</p>
                            </li>
                            <li className="product__info--item">
                                <i className="fa-solid fa-tools product__icon icon"></i>
                                <p>Affiliate tools</p>
                            </li>
                            <li className="product__info--item">
                                <i className="fa-solid fa-link product__icon icon"></i>
                                <p>Unique Link</p>
                            </li>
                            <li className="product__info--item">
                                <i className="fa-regular fa-square-check product__icon icon"></i>
                                <p>Approved</p>
                            </li>
                            {product.recurringCommission ? <li className="product__info--item"> <i className="fa-solid fa-rotate product__icon icon"></i>Recurring</li> : ''}
                        </ul>
                    </div>
                </div>
                <div className="product__side back">
                    <div className="link--box">
                        <h2 className="dashboard__heading">Generate HopLink</h2>
                        <p className="hoplink__text">Earn commission for every customer you refer to this product using your personalized affiliate hoplink.</p>
                        <form className="hoplink-form hoplink-mobile">
                            <div className="hoplink__body">
                                <input className="hoplink__input hoplink-username-mobile" type="text" value={`${user.username}`} placeholder="Username" required />
                                <p className="hoplink__body--text">Required</p>
                            </div>
                            <button className="btn hoplink__submit" type="submit">Generate Hoplink</button>
                        </form>
                    </div>
                </div>
            </figure>

            {(isSuccess || isError) && (
                <Alert alertType={`${isSuccess ? "success" : isError ? "error" : ""}`}>
                    {isSuccess ? (
                        <AiFillCheckCircle className="alert--icon" />
                    ) : isError ? (
                        <AiFillExclamationCircle className="alert--icon" />
                    ) : (
                        ""
                    )}
                    <p>{message}</p>
                </Alert>
            )}
        </>
    );
}

export default ProductCard;
