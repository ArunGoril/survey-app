import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import BasicInfo from "./BasicInfo";
import MarketingInfo from "./MarketingInfo";
import SocialMediaInfo from "./SocialMediaInfo";
import Thanku from "./Thanku";

const UserForm = () => {
    const defaultUserData = {
        firstName: "",
        middleName: "",
        lastName: "",
        birthday: "",
        email: "",
        commEmail: "",
        interests: "",
        moderatePercentile: "",
        growthPercentile: "",
        aggressiveGrowthPercentile: "",
        ageGroup: "",
        websiteLink: "",
        emailType: "",
        facebookLink: "",
        twitterLink: "",
        linkedLink: ""
    }

    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState(defaultUserData);
    // console.log(userData);

    // Proceed to next step
    const nextStep = () => {
        setStep(step + 1);
    }

    // Go back to prev step
    const prevStep = () => {
        setStep(step - 1);
    }

    // Reset form
    const resetForm = () => {
        setUserData(defaultUserData);
        setStep(1);
    }

    // Handle field change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }

    switch (step) {
        case 1:
            return (
                <div className="container custom-container">
                    <div className="my-container">
                        <ProgressBar step={step} />
                        <BasicInfo
                            userData={userData}
                            handleChange={handleChange}
                            nextStep={nextStep}
                            resetForm={resetForm}
                        />
                    </div>
                </div>
            )
        case 2:
            return (
                <div className="container custom-container">
                    <div className="my-container">
                        <ProgressBar step={step} />
                        <MarketingInfo
                            userData={userData}
                            handleChange={handleChange}
                            nextStep={nextStep}
                            prevStep={prevStep}
                            resetForm={resetForm}
                        />
                    </div>
                </div>
            )
        case 3:
            return (
                <div className="container custom-container">
                    <div className="my-container">
                        <ProgressBar step={step} />
                        <SocialMediaInfo
                            userData={userData}
                            handleChange={handleChange}
                            nextStep={nextStep}
                            prevStep={prevStep}
                            resetForm={resetForm}
                        />
                    </div>
                </div>
            )
        case 4:
            return (
                <div className="container custom-container">
                    <div className="my-container">
                        <Thanku
                            resetForm={resetForm}
                        />
                    </div>
                </div>
            )

        default:
            return (
                <div className="container custom-container">
                    <div className="my-container">
                        <ProgressBar step={step} />
                        <BasicInfo
                            userData={userData}
                            handleChange={handleChange}
                            nextStep={nextStep}
                            resetForm={resetForm}
                        />
                    </div>
                </div>
            )
    }
}

export default UserForm;