import { useState } from "react";

const API_KEY = 'to be replaced in a config file ' //TO DO

export function SearchForm({ onResult, onDeleteSearch }) {
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

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`)
            .then(res => res.json())
            .then(results => {
                const { Search = [], totalResults = "0" } = results
                onResult(Search)
                console.log({ Search, totalResults })
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="field has-addons">
                <div className="control">
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