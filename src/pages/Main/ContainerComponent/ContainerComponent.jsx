import React from 'react';
import './ContainerComponent.css';

const ContainerComponent = ({ value, desk, icon }) => (
    <div className="component">
        <div className="component-img">
            <img src={icon} />
        </div>
        <div className="component-value">{value}</div>
        <div className="component-desk">{desk}</div>
    </div>
);

export default ContainerComponent;
