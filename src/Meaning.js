import React from "react";

export default function Meaning(props) {

    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition, index) {
                return (
                    <div key={index}>
                        <p>{definition.definition}</p>
                        <p className="Meaning-example">{definition.example}</p>
                        <p className="Meaning-synonyms">{definition.synonyms}</p>
                    </div>
                ); 
            })}
        </div>
    )

}