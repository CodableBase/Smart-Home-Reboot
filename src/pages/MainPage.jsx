import React from 'react';
import "../styles/index.css"
import MainMenu from "../components/MainMenu";

const MainPage = () => {
    return (
        <div className="mains">
            <div className="Head">
                <h1>Thandaum Project</h1>
            </div>
            <MainMenu></MainMenu>
        </div>

    );
};

export default MainPage;