import React, { useState } from "react";
import axios from "axios";
import Response from "./Response";
import './App.css';

export default function Dictionary(props) {

    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [response, setResponse] = useState(null);
    let [loaded, setLoaded] = useState(false)

    function handleResponse(response) {
        setResponse(response.data[0]);
    }

    function search() {

        // documentation dictionaryapi.dev

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`

        axios.get(apiUrl).then(handleResponse)

    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
 
        return (

            <div className="Dictionary">

                <form className="Dictionary-form" onSubmit={handleSubmit}>

                    <input type="search" autoFocus="on"
                    placeholder="Enter a word..." onChange={handleKeywordChange}>
                    </input>

                </form>

                <Response response={response}/>

            </div>

        )

    }

    else {
        load();
        return null;
    }
}