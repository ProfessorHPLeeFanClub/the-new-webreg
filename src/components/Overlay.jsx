import "../css/Overlay.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { useState } from "react";

function ErrorOverlay(props) {
    // [error, setError] =  useState(props.error);

    const handleCloseError = () => {
        props.handleError();
    }
    return (
        <div className="alert errorAlert alert-dismissible fade show" role="alert">
            <strong>{props.errorTitle}</strong> {props.desc}
            <button type="button" 
                    className="btn-close" 
                    //data-bs-dismiss="alert" 
                    aria-label="Close"
                    onClick={handleCloseError}></button>
        </div>
    )
}



export {ErrorOverlay};