import { faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ loginDetails }) => (
    <header>
        <Link to="/stories">
            <h1>RCS</h1>
        </Link>
        <div className="menu">
            <p>
                <FontAwesomeIcon icon={faUser} />
                {loginDetails.username}
            </p>
            <button className="logout" type="submit" onClick={() => console.log("logout clicked")}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                Logout
            </button>
        </div>
    </header>
);

export default Header;
