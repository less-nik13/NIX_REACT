import React from 'react';

const Dot = ({ pickColor, colorName, activeClass }) => {
    return (
        <div onClick={pickColor} className={`dot dot-${colorName} ${activeClass}`}></div>
    );
};

export default Dot;