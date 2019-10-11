import React from 'react';

const ToggleButton = props => {
    const {
        icon,
        onClick,
        isActive,
    } = props;

    return (
        <button
            onClick={onClick}
            disabled={isActive}
        >
            {icon}
        </button>
    )
}

export default ToggleButton