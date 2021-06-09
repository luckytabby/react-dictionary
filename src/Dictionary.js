import React, { useState } from "react";
import axios from "axios";
import Response from "./Response";
import Photos from "./Photos"
import './App.css';

export default function Dictionary(props) {

    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [response, setResponse] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function handleResponse(response) {
        setResponse(response.data[0]);
    }

    function search() {

        // documentation dictionaryapi.dev

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`

        axios.get(apiUrl).then(handleResponse);

        // documentation https://www.pexels.com/api/

        let pexelsApiKey = `563492ad6f917000010000012299fd19b42d4a9abc16c4b7b5e62e29`

        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`

        axios.get(pexelsApiUrl, {headers: { Authorization: `Bearer ${pexelsApiKey}` }}).then(handlePexelsResponse);

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

                <section>

                    <form className="Dictionary-form" onSubmit={handleSubmit}>

                        <input type="search" autoFocus="on"
                        placeholder="Enter a word..." onChange={handleKeywordChange}>
                        </input>

                    </form>

                    <Response response={response}/>

                </section>

                <section>

                    <Photos photos={photos} />

                </section>

            </div>

        )

    }

    else {
        load();
        return null;
    }
}