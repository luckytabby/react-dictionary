import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {

    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data);
    }

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`

        axios.get(apiUrl).then(handleResponse)

    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
 
    return (
        <form className="Dictionary-form" onSubmit={search}>

            <input type="search" autoFocus="on"
            placeholder="Enter a word..." onChange={handleKeywordChange}>
            </input>

            <input type="submit"></input>

        </form>
    )
}