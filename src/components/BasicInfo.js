import React, { useState } from "react";
import Input from "./Input";

const BasicInfo = (props) => {
    const { userData, handleChange, nextStep, resetForm } = props;
    const {firstName, middleName, lastName, birthday, email, commEmail, interests } = userData;

    let [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);
    // console.log(formErrors);

    const next = (e) => {
        e.preventDefault();
        formErrors = validate(userData);
        setFormErrors(formErrors);
        // setIsSubmit(true);
        if (Object.keys(formErrors).length === 0) {
            nextStep();
        }
    }

    const reset = (e) => {
        e.preventDefault();
        if (window.confirm("are you sure you want to clear the form ?")) {
            formErrors = {};
            setFormErrors(formErrors);
            resetForm();
        }
    }

    const validate = (user) => {
        const {firstName, birthday, email, commEmail } = user;
        const regex1 = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
        const regex2 = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
        const errors = {};

        if (!firstName) {
            errors.firstName = "First Name is required!";
        }

        if (!birthday) {
            errors.birthday = "Birthday is required!";
        }

        if (!email) {
            errors.email = "Email is required!";
        } else if (!regex1.test(email)) {
            errors.email = "Enter a valid email!"
        }

        if (!commEmail) {
            errors.commEmail = "Communication email is required!"
        } else if (!regex2.test(commEmail)) {
            errors.commEmail = "Enter a valid email!"
        }

        return errors;
    }

    return (
        <form>
            <div className="form-row row">
                <div className="col-md-4 mb-3">
                    <Input 
                        label="* First Name"
                        type="text"
                        id="first-name"
                        name="firstName"
                        value={firstName}
                        handleChange={handleChange}
                        error={formErrors.firstName}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <Input 
                        label="Middle Name"
                        type="text"
                        id="middle-name"
                        name="middleName"
                        value={middleName}
                        handleChange={handleChange}
                        error={formErrors.middleName}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <Input 
                        label="Last Name"
                        type="text"
                        id="last-name"
                        name="lastName"
                        value={lastName}
                        handleChange={handleChange}
                        error={formErrors.lastName}
                    />
                </div>
            </div>
            <div className="form-row row">
                <div className="col-md-4 mb-3">
                    <Input 
                        label="* Birthday"
                        type="date"
                        id="birthday"
                        name="birthday"
                        value={birthday}
                        handleChange={handleChange}
                        error={formErrors.birthday}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <Input 
                        label="* Email"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        handleChange={handleChange}
                        error={formErrors.email}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <Input 
                        label="* Communication Email"
                        type="text"
                        id="comm-email"
                        name="commEmail"
                        value={commEmail}
                        handleChange={handleChange}
                        error={formErrors.commEmail}
                    />
                </div>
            </div>
            <div className="form-row row">
                <div className="col mb-3">
                    <label htmlFor="interests">Interests</label>
                    <textarea className="form-control" id="interests" name="interests" value={interests} onChange={handleChange}></textarea>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <button className="btn btn-outline-primary px-4" type="button" onClick={reset}>Cancel</button>
                </div>
                <div className="col text-right">
                    <button className="btn btn-primary px-4" type="button" onClick={next}>Next</button>
                </div>
            </div>
        </form>       
    )
}

export default BasicInfo;