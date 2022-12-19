import React from 'react';
import './ButtonComponent.css';

const ButtonComponent = ({ value, style, onClick, styleColor }) => (
    <div className="btn-component" style={style}>
        <button
            className={`btn-component--button ${styleColor ? styleColor : ''}`}
            onClick={onClick}
            type="button"
        >
            {value}
        </button>
    </div>
);

export default ButtonComponent;
