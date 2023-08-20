import React from 'react';
import Button from "./Button";

const GitHubComponent = ({onClick, state}) => {
    return (
        <div className="Component">
            <h1>Link to my GitHub 😊</h1>
            <a href="https://github.com/CodableBase?tab=repositories">GitHub</a>
            <Button text="Close" onClick={onClick} state={state}></Button>
        </div>
    );
};

export default GitHubComponent;