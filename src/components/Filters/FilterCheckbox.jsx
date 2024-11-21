import React, { useState } from 'react';

const FilterCheckbox = ({ label, options, selectedOptions, setSelectedOptions, className }) => {
    const [isVisible, setIsVisible] = useState(false); // Estado para controlar visibilidade

    const handleCheckboxChange = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    return (
        <div className={`filter-checkbox ${className || ''}`}> {/* Adiciona a classe personalizada */}
            <div className="filter-header" onClick={() => setIsVisible(!isVisible)}>
                <h4>{label}</h4>
                <img
                    src="/img/setinhaRoxa.svg"
                    alt="Toggle"
                    style={{ transform: isVisible ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }}
                />
            </div>
            {isVisible && (
                <div className="filter-options">
                    {options.map((option, index) => (
                        <div key={index}>
                            <input
                                type="checkbox"
                                value={option}
                                checked={selectedOptions.includes(option)}
                                onChange={() => handleCheckboxChange(option)}
                            />
                            <label>{option}</label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterCheckbox;
