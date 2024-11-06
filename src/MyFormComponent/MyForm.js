
import React, { useState } from 'react';
import './MyForm.css';

export default function MyForm() {
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState(null);

    function handleInputChange(event) {
        const value = event.target.value;
        setInputValue(value);

        if (value.length < 5) {
            setInputError('Input must be at least 5 characters');
        } else {
            setInputError(null);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (inputValue.length >= 5) {
            // submit form
            alert(`Submitted value: ${inputValue}`);
        } else {
            setInputError('Input must be at least 5 characters');
        }
    }

    return (
        <form className="my-form" onSubmit={handleSubmit}>
            <label className="form-label">
                Fruit:
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="form-input"
                />
            </label>
            {inputError && <div className="error-message">{inputError}</div>}
            <button type="submit" className="form-button">Submit</button>
        </form>
    );
}
