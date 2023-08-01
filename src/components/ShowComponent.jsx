import React from 'react';
import StartComponent from "./StartComponent";

const ShowComponent = ({show, setShow}) => {
    function renderSwitch(param) {
        switch(param) {
            case 'Start':
                return <StartComponent setShow={setShow}></StartComponent>;
             case 'Info':
                 return '';
             case 'GitHub':
                 return '';
            default:
                 return '';
        }
    }


    return (
        <div>
            {renderSwitch(show)}
        </div>
    );
};




export default ShowComponent;