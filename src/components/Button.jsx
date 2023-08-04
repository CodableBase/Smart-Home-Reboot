import React from 'react';

const Button = ({text, onClick, state}) => {
    return (
        <button className="button" onClick={() => {onClick(!state)}}>
            {text}
        </button>
    );
};

export default Button;