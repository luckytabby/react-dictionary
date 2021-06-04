import React from "react";
import Meaning from "./Meaning";

export default function Response(props) {

    if(props.response) {
        return (
            <div className="Response">
                <h2>{props.response.word}</h2>
                {props.response.meanings.map(function (meaning, index) {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    )
                })}
            </div>
        )
    }

    else {
        return null;
    }

}