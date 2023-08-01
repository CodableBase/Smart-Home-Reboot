import React, {useState} from 'react';
import Button from "./Button";
import ShowComponent from "./ShowComponent";

const MainMenu = () => {
    const [show,setShow] = useState("")

    return (
        <div className="Menu">
            {show !== "" ? <ShowComponent setShow={setShow} show={show}></ShowComponent> :
            <div>
                <Button text="Start" onClick={setShow}></Button>
                <Button text="Info" onClick={setShow}></Button>
                <Button text="GitHub" onClick={setShow}></Button>
            </div>}
        </div>
    );
};

export default MainMenu;