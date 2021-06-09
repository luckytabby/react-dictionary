import React from "react";

export default function Photos(props) {

    if (props.photos) {
        return (
            <div className="Photos">
                    {props.photos.map(function(photo, index) {
                        return (
                            <div key={index}>
                                <a href={photo.src.original} target="_blank" rel="noopener noreferrer">
                                    <img src={photo.src.landscape}  alt="the term defined above" />
                                </a>
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