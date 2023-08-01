import React from 'react';

const StartComponent = ({setShow}) => {
    return (
        <div className="Start">
            <h1>To start:</h1>
            <h5>1)Download App</h5>
            <h5>2)Register</h5>
            <h5>3)Connect your devices</h5>
            <h5>4)Make personal preferences</h5>
            <h5>5)Enjoy your using!</h5>
            <button onClick={/*setShow("")*/ () => {console.log("")
                setShow("")}}>Close</button>
        </div>
    );
};

export default StartComponent;