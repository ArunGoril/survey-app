import React, { useState } from "react";
import Input from "./Input";
import axios from "axios";

const SocialMediaInfo = (props) => {
    const { userData, handleChange, nextStep, prevStep, resetForm } = props;
    const { ageGroup, websiteLink, emailType, facebookLink, twitterLink, linkedLink } = userData;

    let [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);
    // console.log(formErrors);

    const next = (e) => {
        e.preventDefault();
        // console.log("Hi I got clicked");
        formErrors = validate(userData);
        setFormErrors(formErrors);
        // setIsSubmit(true);
        if (Object.keys(formErrors).length === 0) {
            axios.post("http://localhost:9002/survey", userData)
            .then((res) => console.log(res.data));
            nextStep();
        }
    }

    const prev = (e) => {
        e.preventDefault();
        prevStep();
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
        const { ageGroup, websiteLink, facebookLink, twitterLink, linkedLink } = user;
        const regex1 = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        const regex2 = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        const regex3 = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        const regex4 = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        const errors = {};

        if (!ageGroup) {
            errors.ageGroup = "Age group is required!";
        }

        if (websiteLink && !regex1.test(websiteLink)) {
            errors.websiteLink = "Invalid website link!";
        }

        if (!facebookLink) {
            errors.facebookLink = "Enter facebook page link!";
        } else if (!regex2.test(facebookLink)) {
            errors.facebookLink = "Invalid facebook page link!"
        }

        if (!twitterLink) {
            errors.twitterLink = "Enter twitter page link!";
        } else if (!regex3.test(twitterLink)) {
            errors.twitterLink = "Invalid twitter page link!"
        }

        if (!linkedLink) {
            errors.linkedLink = "Enter linkedin page link!";
        } else if (!regex4.test(linkedLink)) {
            errors.linkedLink = "Invalid linked page link!"
        }

        return errors;
    }

    return (
        <form className="container">
            <div className="form-row row mb-3">
                <div className="col-md-4 mb-3">
                    <label htmlFor="age-group">* What is age group ideal target clients?</label>
                    {/* <input type="text" className="form-control" id="age-group" name="ageGroup" value={ageGroup} onChange={handleChange} /> */}
                    <select className="form-control" id="age-group" name="ageGroup" value={ageGroup} onChange={handleChange} data-testid="input" >
                        <option value="">--select--</option>
                        <option value="18-30">18-30</option>
                        <option value="30-40">30-40</option>
                        <option value="40-60">40-60</option>
                        <option value="above-60">Above 60</option>
                    </select>
                    <div className="errors-div">
                        {formErrors.ageGroup}
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <Input 
                        label="Link of your website"
                        type="text"
                        id="website-link"
                        name="websiteLink"
                        value={websiteLink}
                        handleChange={handleChange}
                        error={formErrors.websiteLink}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="email-type">Which marketing tactics currently use?</label>
                    {/* <input type="text" className="form-control" id="email-type" name="emailType" value={emailType} onChange={handleChange} /> */}
                    <select className="form-control" id="email-type" name="emailType" value={emailType} onChange={handleChange} data-testid="input" >
                        <option value="">--select--</option>
                        <option value="email-marketing">Email Marketing</option>
                        <option value="social-media-markeing">Social Media Marketing</option>
                        <option value="mobile-marketing">Mobile Marketing</option>
                        <option value="content-marketing">Content Marketing</option>
                    </select>
                    <div className="errors-div">
                        
                    </div>
                </div>
            </div>
            <div className="form-row row">
                <div className="col-md-4 mb-3">
                    <Input 
                        label="* Link of Facebook page"
                        type="text"
                        id="facebook-link"
                        name="facebookLink"
                        value={facebookLink}
                        handleChange={handleChange}
                        error={formErrors.facebookLink}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <Input 
                        label="* Link of Twitter page"
                        type="text"
                        id="twitter-link"
                        name="twitterLink"
                        value={twitterLink}
                        handleChange={handleChange}
                        error={formErrors.twitterLink}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <Input 
                        label="* Link of LinkedIn page"
                        type="text"
                        id="linkedin-link"
                        name="linkedLink"
                        value={linkedLink}
                        handleChange={handleChange}
                        error={formErrors.linkedLink}
                    />
                </div>
            </div>
            <div className="row mt-5 pt-5">
                <div className="col">
                    <button className="btn btn-outline-primary px-4" type="button" onClick={reset}>Cancel</button>
                </div>
                <div className="col text-right">
                    <button className="btn btn-primary px-4 mx-4" type="button" onClick={prev}>Prev</button>
                    <button className="btn btn-success px-4" type="button" onClick={next}>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default SocialMediaInfo;