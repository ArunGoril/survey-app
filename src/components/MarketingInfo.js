import React, { useState } from "react";
import Chart from "react-apexcharts";
import Input from "./Input";

const MarketingInfo = (props) => {
    const { userData, handleChange, nextStep, prevStep, resetForm } = props;
    const { moderatePercentile, growthPercentile, aggressiveGrowthPercentile} = userData;

    let a = Number(moderatePercentile);
    let b = Number(growthPercentile);
    let c = Number(aggressiveGrowthPercentile);
    let dataLabelsDisplay = true;
    let showTooltip = true;

    if (!moderatePercentile && !growthPercentile && !aggressiveGrowthPercentile) {
        a = 25;
        b = 15;
        c = 60;
        dataLabelsDisplay = false;
        showTooltip = false;
    }

    let [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);

    const next = (e) => {
        e.preventDefault();
        formErrors = validate(userData);
        setFormErrors(formErrors);
        // setIsSubmit(true);
        if (Object.keys(formErrors).length === 0) {
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
        const { moderatePercentile, growthPercentile, aggressiveGrowthPercentile} = user;
        const errors = {};

        if (!moderatePercentile) {
            errors.moderatePercentile = "Moderate percentage is required!";
        }

        if (!growthPercentile) {
            errors.growthPercentile = "Growth percentage is required!";
        }
        if (!aggressiveGrowthPercentile) {
            errors.aggressiveGrowthPercentile = "Aggressive growth percentage is required!";
        }

        if (Number(moderatePercentile) + Number(growthPercentile) + Number(aggressiveGrowthPercentile) !== 100 && moderatePercentile && growthPercentile && aggressiveGrowthPercentile) {
            errors.total = "total percentage must be 100!";
        }

        return errors;
    }

    return (
        <form className="container">
            <div className="form-row row">
                <p>Allocate percentage in 3 risk categories based on your interests​</p>
                <div className="col-md-4 mb-3">
                    <Input 
                        label="* Moderate"
                        type="number"
                        id="moderate"
                        name="moderatePercentile"
                        value={moderatePercentile}
                        handleChange={handleChange}
                        error={formErrors.moderatePercentile}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <Input 
                        label="* Growth"
                        type="number"
                        id="growth"
                        name="growthPercentile"
                        value={growthPercentile}
                        handleChange={handleChange}
                        error={formErrors.growthPercentile}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <Input 
                        label="* Aggressive Growth"
                        type="number"
                        id="aggressive-growth"
                        name="aggressiveGrowthPercentile"
                        value={aggressiveGrowthPercentile}
                        handleChange={handleChange}
                        error={formErrors.aggressiveGrowthPercentile}
                    />
                </div>
                <div className="errors-div text-center">{formErrors.total}</div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="investment-bar">
                        <Chart 
                            type="donut"
                            width={400}
                            series={[a, b, c]}
                            options={{
                                labels:['Moderate', 'Growth', 'Aggressive Growth'],
                                dataLabels:{
                                    enabled:dataLabelsDisplay
                                },
                                tooltip: {
                                    enabled: showTooltip
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <button className="btn btn-outline-primary px-4" type="button" onClick={reset}>Cancel</button>
                </div>
                <div className="col text-right">
                    <button className="btn btn-primary px-4 mx-4" type="button" onClick={prev}>Prev</button>
                    <button className="btn btn-primary px-4" type="button" onClick={next}>Next</button>
                </div>
            </div>
        </form>
    )
}

export default MarketingInfo;