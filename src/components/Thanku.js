import React from "react";

const Thanku = (props) => {
    const { resetForm } = props;
    return (
        <div className="container container-custom text-center">
            <div className="row">
                <div className="col">
                    <h3>Thank you for submitting the survey.​</h3>
                    <p>We will get back to you after reviewing the details.</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-outline-primary px-4" type="button" onClick={resetForm}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Thanku;