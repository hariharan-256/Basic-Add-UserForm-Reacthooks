import React from "react";
import './ToastErr.scss';

const ToastErr = (props) => {
    return <>
        <div className={`toast-main ${props.change}`}>
            <div className="toast-text">
                <div className="toast-text">{props.error}</div>
                <i onClick={props.close}>X</i>
            </div>
            <div className="toast-bar"></div>
        </div>
    </>
}

export default ToastErr;