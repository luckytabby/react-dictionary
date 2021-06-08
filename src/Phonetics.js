import React from "react";
import ReactAudioPlayer from 'react-audio-player';

// documentation https://www.npmjs.com/package/react-audio-player

export default function Phonetics(props) {
    if (props.phonetics) {
        return (
            <div className="Phonetics">
                <p>{props.phonetics[0].text}</p>
                <ReactAudioPlayer
                src={props.phonetics[0].audio}
                controls
                />
            </div>
        )
    }
    else {
        return null;
    }
}