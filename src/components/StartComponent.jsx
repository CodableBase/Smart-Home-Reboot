import React from 'react';
import Button from "./Button";

const StartComponent = ({onClick, state}) => {
    return (
        <div className="StartMenu">
            <h1>To begin</h1>
            <h5>1)Download App</h5>
            <h5>2)Register in App</h5>
            <h5>3)Connect devices</h5>
            <h5>4)Change their settings</h5>
            <h5>5)Enjoy using!</h5>
            <Button text="Close" onClick={onClick} state={state}></Button>
        </div>
    );
};

export default StartComponent;