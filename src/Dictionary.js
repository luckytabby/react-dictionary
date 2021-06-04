import React, { useState } from "react";
import axios from "axios";
import Response from "./Response";

export default function Dictionary() {

    let [keyword, setKeyword] = useState("");
    let [response, setResponse] = useState(null);

    function handleResponse(response) {
        setResponse(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        // documentation dictionaryapi.dev

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`

        axios.get(apiUrl).then(handleResponse)

    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
 
    return (

        <div className="Dictionary">

            <form className="Dictionary-form" onSubmit={search}>

                <input type="search" autoFocus="on"
                placeholder="Enter a word..." onChange={handleKeywordChange}>
                </input>

                <input type="submit"></input>

            </form>

            <Response response={response}/>

        </div>

    )
}