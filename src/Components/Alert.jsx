import React from "react";

function Alert({ children, alertType }) {
	return (
		<div className={`alert alert--${alertType}`}>
            {children}
            <picture>
                <source srcset={`https://fonts.gstatic.com/s/e/notoemoji/latest/${alertType === 'error' ? '1f61f' : '2728'}/512.webp`} type="image/webp" />
                <img src={`https://fonts.gstatic.com/s/e/notoemoji/latest/${alertType === 'error' ? '1f61f/512.gif" alt="😟"' : '2728/512.gif" alt="✨"'}`} width="32" height="32" />
            </picture>
		</div>
	);
}

export default Alert;


{/* <Alert alertType={`${isSuccess ? "success" : isError ? "error" : ""}`}>
    {isSuccess ? (
        <AiFillCheckCircle className="alert--icon" />
    ) : isError ? (
        <AiFillExclamationCircle className="alert--icon" />
    ) : (
        ""
    )}
    <p>{message}</p>
</Alert> */}

