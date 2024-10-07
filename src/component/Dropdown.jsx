import React from 'react';
const Dropdown = ({ label, options }) => {
  return (
    <div className="dropdown">
      <label><h3>Choose {label}</h3></label>
      <select>
        <option value="">Choose {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;