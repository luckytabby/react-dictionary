import React from "react";

export default function Photos(props) {

    if (props.photos) {
        return (
            <div className="Photos">
                <div className="row">
                    {props.photos.map(function(photo, index) {
                        return (
                            <div className="col" key={index}>
                                <a href={photo.src.original} target="_blank" rel="noopener noreferrer" alt="decorative image of search subject">
                                    <img src={photo.src.landscape} />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    else {
        return null;
    }
}