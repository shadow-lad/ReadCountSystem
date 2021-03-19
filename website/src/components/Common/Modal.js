import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Modal = ({ title, message, onDismiss }) => (
    <div className="modal-container">
        <div className="modal">
            <button type="button" onClick={onDismiss}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2>{title}</h2>
            <hr />
            <p>{message}</p>
            <button type="button" onClick={onDismiss}>
                OK
            </button>
        </div>
    </div>
);

export default Modal;
