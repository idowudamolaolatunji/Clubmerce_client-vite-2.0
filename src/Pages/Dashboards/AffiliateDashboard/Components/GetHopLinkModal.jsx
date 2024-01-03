import React from "react";
import { useAuthContext } from "../../../../Context/AuthContext";
import { AiOutlineClose } from "react-icons/ai";

function GetHopLinkModal({ handleHoplinkGeneration, setShowHoplinkModal }) {
	const { user } = useAuthContext();

    function handleCloseModal() {
        setShowHoplinkModal(false)
    }

	return (
		<>
			<div className="hoplink__overlay get__overlay" onClick={handleCloseModal} />
			<div className="hoplink__modal get__modal">
				<AiOutlineClose className="icon hoplink__icon" onClick={handleCloseModal} />
				<h2 className="dashboard__heading">Generate HopLink</h2>
				<p className="hoplink__text">
					Earn commission for every customer you refer to this product using your
					personalized affiliate hoplink.
				</p>
				<form className="hoplink" id="hoplink" onSubmit={handleHoplinkGeneration}>
					<div className="hoplink__body">
						<input
							className="hoplink__input"
							id="hoplink-username"
							type="text"
							required
							value={user.email}
							readOnly
							placeholder="Username"
						/>
						<p className="hoplink__body--text">Required</p>
					</div>
					<button className="btn hoplink__submit submit" type="submit">
						Generate Hoplink
					</button>
				</form>
			</div>
		</>
	);
}

export default GetHopLinkModal;
