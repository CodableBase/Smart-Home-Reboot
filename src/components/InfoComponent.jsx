import React from 'react';
import Button from "./Button";

const InfoComponent = ({onClick, state}) => {
    return (
        <div className="InfoMenu">
            <h4>Download App from Google Play -> <a href="www.google.com">Here</a></h4>
            <h4>Download App from App Store -> <a href="www.google.com">Will be added later</a></h4>
            <h4>Download from the website -> <a href="www.google.com">Download</a></h4>
            <Button text="Close" onClick={onClick} state={state}></Button>
        </div>
    );
};

export default InfoComponent;