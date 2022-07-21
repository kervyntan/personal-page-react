import React from 'react';
import Button from "./Button";

const Modal = (props) => {
    return (
        <div className={props.className}>
            <h2 className="modal__heading"> {props.heading} </h2>
            <p className="modal__para"> {props.para} </p>
            <Button type="button" className="btn btn-modal" onClickHandler={props.closeModal} text="Close and Continue"/>
        </div>
    )
}

export default Modal;