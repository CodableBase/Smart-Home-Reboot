import React from 'react';

const Button = ({text, onClick}) => {
    return (
        <button className="button" onClick={onClick(text)}>
            {text}
        </button>
    );
};

export default Button;