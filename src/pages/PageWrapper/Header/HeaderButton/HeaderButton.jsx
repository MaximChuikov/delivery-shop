import React from 'react';

import './HeaderButton.css';

const HeaderButton = ({ onClick }) => {
    return <button className="header-btn" type="button" onClick={onClick} />;
};

export default HeaderButton;
