import React, {useState} from 'react';
import Button from "./Button";
import StartComponent from "./StartComponent";
import InfoComponent from "./InfoComponent";
import GitHubComponent from "./GitHubComponent";

const MainMenu = () => {
    const [showStart,setShowStart] = useState(false)
    const [showInfo,setShowInfo] = useState(false)
    const [showGit,setShowGit] = useState(false)

    return (
        <div className="Menu">
            {
                showStart === true || showInfo === true || showGit === true ? null : <div>
                    <Button text="Start" state={showStart} onClick={setShowStart}></Button>
                    <Button text="Info" state={showInfo} onClick={setShowInfo}></Button>
                    <Button text="GitHub" state={showGit} onClick={setShowGit}></Button>
                </div>
            }
            {
                showStart === true ? <StartComponent onClick={setShowStart} state={showStart}/> : null
            }
            {
                showInfo === true ? <InfoComponent onClick={setShowInfo} state={showInfo}/> : null
            }
            {
                showGit === true ? <GitHubComponent onClick={setShowGit} state={showGit}/> : null
            }
        </div>
    );
};

export default MainMenu;