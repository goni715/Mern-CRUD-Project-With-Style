import React from 'react';
import Loader from "../../assets/img/Loader.gif";

const FullScreenLoader = () => {
    return (
        <div className="ProcessingDiv">
            <div className="center-screen">
                <img className="loader-size" src={Loader}/>
            </div>
            
        </div>
    );
};

export default FullScreenLoader;