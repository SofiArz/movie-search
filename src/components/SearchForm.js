import { useState } from "react";

export function SearchForm({ onResult, onDeleteSearch, onLoad }) {
    const [movie, setMovie] = useState('')

    const handleChange = (e) => {
        setMovie(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!movie) {
            onDeleteSearch()
            return
        }

        onLoad(true)

        fetch(`${process.env.REACT_APP_API_URL}/shows/search/title?country=us&title=${movie}`,{
            headers:{
                'x-rapidapi-key':process.env.REACT_APP_STREAMING_API_KEY
            }}
        )
            .then(res => res.json())
            .then(results => {
                onResult(results)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="field has-addons">
                <div className="control" style={{minWidth:"380px"}}>
                    <input
                        class="input is-primary"
                        onChange={handleChange}
                        type="text"
                        placeholder="Movie to search" />
                </div>
                <div className="control">
                    <button className="button is-primary">
                        Search
                    </button>
                </div>
            </div>
        </form>
    );
}