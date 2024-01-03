import React from "react";

import "../../../../Assets/css/chats.css";
import DashboardUi from "./DashboardUi";

function Chat() {
	return (
		<DashboardUi>
			<div className="chat__container">
				<div className="chat__container--head">
					<div className="chat--searchbar">
						<i className="fa fa-search icon" aria-hidden="true" />
						<input type="text" placeholder="Anyone" />
					</div>
					<div className="chat--title">
						<p className="name dashboard__heading">Idowu Olatunji</p>
						<i className="icon fa fa-ellipsis" aria-hidden="true" />
					</div>
				</div>
				<div className="chat__container--body">
					<section className="discussions__card">
						<a className="discussion__figure" href="/chat">
							<span className="photo">
								<img src="/../asset/img/idowu.png" alt="chat user image" />
							</span>
							<div className="chat-contact">
								<p className="name">Idowu Olatunji</p>
								<p className="message">Coming Soon..</p>
							</div>
						</a>
					</section>
					<section className="chat">
						<div className="messages-chat">
							<div className="message friend-message">
								<span className="photo">
									<img src="/../asset/img/idowu.png" alt="chat image" />
								</span>
								<p className="text">Coming Soon... </p>
							</div>
							<p className="friend-message-time time">14h58</p>
						</div>
						<div className="chat-footer">
							<input
								className="write-message"
								id="write-message"
								type="text"
								placeholder="Type your message here"
							/>
							<button className="send" id="send">
								<i className="icon fa fa-paper-plane" />
							</button>
						</div>
					</section>
				</div>
			</div>
		</DashboardUi>
	);
}

export default Chat;
