import React from 'react';



const How=()=>{
    const videosrc= "https://youtu.be/PNcroxWDgYI"
    return(
        <div className="row how-section" id="how">
            <div className="col-md-6 how-col-1">
                <h1 >How it works</h1>
                <ul>
                    <li>Download the Go Home app and install</li>
                    <li>Give the app permission to read your location(Do this at home)</li>
                    <li>The location of your home is saved</li>
                
                </ul>
                <h3 className="simple">SIMPLE</h3>
            </div>
            <div className="col-md-6">
                <div className="ui embed youtube">
                    <video title="video player" src={videosrc}></video>
                </div>
            </div>
        </div>
    )
};


export default How;