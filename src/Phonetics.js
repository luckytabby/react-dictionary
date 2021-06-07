import React from "react";

export default function Phonetics(props) {
    if (props.phonetics) {
        return (
            <div className="Phonetics">
                <a href={props.phonetics[0].audio} target="_blank" rel="noopener noreferrer">Listen</a>
                {props.phonetics[0].text}
            </div>
        )
    }
    else {
        return null;
    }
}