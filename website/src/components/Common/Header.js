import { faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
	render() {
		return (
			<header>
				<Link to="/stories">
					<h1>RCS</h1>
				</Link>
				<div className="menu">
					<p>
						<FontAwesomeIcon icon={faUser}/>
						{this.props.loginDetails.username}
					</p>
					<button className="logout" type="submit" onClick={()=> console.log("logout clicked")}>
						<FontAwesomeIcon icon={faSignOutAlt} />
						Logout
					</button>
				</div>
			</header>
		);
	}
}
