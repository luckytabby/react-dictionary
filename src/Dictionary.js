import React, { useState } from "react";

export default function Dictionary() {

    let [keyword, setKeyword] = useState("");

    function handleKeyword(event) {
        console.log(event);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
 
    return (
        <form className="Dictionary-form" onSubmit={handleSubmit}>

            <input type="search" autoFocus="on"
            placeholder="Enter a word...">
            </input>

            <input type="submit" onChange={handleKeyword}></input>

        </form>
    )
}