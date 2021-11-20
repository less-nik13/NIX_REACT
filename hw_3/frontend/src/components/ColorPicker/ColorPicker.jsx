import React from 'react';
import Dot from "../Dot/Dot";

const ColorPicker = ({ title, pickColor, colors, selectedColor }) => {
    return (
        <div className="picker">
            <div className="picker__wrapper">
                <p className="picker__title">{title}</p>
                <div className="picker__dots">
                    {colors.map(color =>
                        <Dot key={color.id}
                             pickColor={pickColor}
                             colorName={color.name}
                             activeClass={selectedColor === color.name && 'dot--active'}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ColorPicker;