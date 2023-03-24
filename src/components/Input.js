import React from "react";

const Input = (props) => {
    const { label, type, id, name, value, error, handleChange } = props;
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input type={type} className="form-control" id={id} name={name} value={value} onChange={handleChange} data-testid="input" />
            <div className="errors-div">
                {error}
            </div>
        </>
    )
}

export default Input;