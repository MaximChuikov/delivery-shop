import React from 'react';
import PropTypes from "prop-types";
import './ButtonComponent.css';

const ButtonComponent = ({ onClick, outline, children, ...props }) => (
    <div {...props}>
        <button
            className={`btn-component--button ${outline ? 'color-in' : 'color-out'}`}
            onClick={onClick}
            type="button"
        >
            {children}
        </button>
    </div>
);

ButtonComponent.propTypes = {
    onClick: PropTypes.func,
    outline: PropTypes.bool
}

export default ButtonComponent;
