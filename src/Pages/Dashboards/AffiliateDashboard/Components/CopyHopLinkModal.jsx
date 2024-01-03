import React from "react";

function CopyHopLinkModal({ handleOnCopy, link, setShowCopyModal }) {

	function handleCloseCopyModal() {
        setShowCopyModal(false)
    }
	return (
		<div className="hoplink__overlay copy__overlay">
			<div className="hoplink__modal copy__modal">
				<h2 className="dashboard__heading">Copy HopLink</h2>
				<p className="hoplink__text">Paste this URL into your promotional materials.</p>
				<p className="hoplink__copy">{link}</p>
				<div className="flexible">
					<button className="btn hoplink__submit btnModalOk" onClick={handleCloseCopyModal}>Ok</button>
					<button className="hoplink__copy-button outline" onClick={handleOnCopy}>Copy</button>
				</div>
			</div>
		</div>
	);
}

export default CopyHopLinkModal;
