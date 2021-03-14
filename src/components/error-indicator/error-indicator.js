import React from 'react';
import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = ({error = 'Something has gone terribly wrong'}) => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span className="boom">BOOM!</span>
            <span>{error}</span>
        </div>
    );
};

export default ErrorIndicator;
