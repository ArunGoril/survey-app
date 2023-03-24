import React from "react";

const ProgressBar = ({ step }) => {
    const width = 33.3 * step;
    return (
        <div className="progressbar-container">
            <div className="row text-center">
                <div className="col">BASIC INFO</div>
                <div className="col">MARKETING</div>
                <div className="col">SOCIAL MEDIA</div>
            </div>
            <div className="progressbar">
                <div style={{ width: width + "%" }}></div>
            </div>
        </div>
    )
}

export default ProgressBar;