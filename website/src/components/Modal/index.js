import React, { Component } from "react";
import "./index.scss";

class Modal extends Component {
	render() {
		return (
			<div className="modal-container">
				<div className="modal">
					<button type="button" onClick={this.props.onDismiss}>
						&times;
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
