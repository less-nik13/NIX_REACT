import React, { Component } from 'react';
import Form from "./Form";

class Modal extends Component {
    handleOverlayClick = (e) => {
        if(e.target.classList.contains('modal__overlay')) {
            this.props.closeModal()
        }
    }

    render() {
        return (
            <div className="modal__overlay" onClick={this.handleOverlayClick}>
                <div className="modal__wrapper">
                    <div className="modal__content">
                        <span className="modal__close" onClick={this.props.closeModal}></span>
                        <Form closeModal={this.props.closeModal}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;