
import React, { useRef } from 'react';
import './Uncontrolled.css'; // Import the CSS file

export default function Uncontrolled() {
    const selectRef = useRef(null);
    const checkboxRef = useRef(null);
    const inputRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Input value:", inputRef.current.value);
        console.log("Select value:", selectRef.current.value);
        console.log("Checkbox value:", checkboxRef.current.checked);
    }

    return (
        <form className="uncontrolled-form" onSubmit={handleSubmit}>
            <label className="form-label">
                <p>Name:</p>
                <input ref={inputRef} type="text" className="form-input" />
            </label>
            <label className="form-label">
                <p>Favorite color:</p>
                <select ref={selectRef} className="form-select">
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>
            </label>
            <label className="form-checkbox-label">
                <input type="checkbox" ref={checkboxRef} />
                <span>Do you like React?</span>
            </label>
            <button type="submit" className="form-button">Submit</button>
        </form>
    );
}
