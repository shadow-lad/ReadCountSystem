import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class Modal extends Component {
	render() {
		return (
			<div className="modal-container">
				<div className="modal">
					<button type="button" onClick={this.props.onDismiss}>
						<FontAwesomeIcon icon={faTimes} />
					</button>
					<h2>{this.props.title}</h2>
					<hr />
					<p>{this.props.message}</p>
					<button type="button" onClick={this.props.onDismiss}>
						OK
					</button>
				</div>
			</div>
		);
	}
}

export default Modal;
