import { useState } from 'react';
import { Title } from '../components/Title'
import { SearchForm } from '../components/SearchForm'
import { MoviesList } from '../components/MoviesList'

export const Home = () => {
    const [result, setResult] = useState([])
    const [isSearchUsed, setIsSearchUsed] = useState(false)

    const handleResult = (movies) => {
        setResult(movies)
        setIsSearchUsed(true)
    }

    const handleDeleteSearch = () => {
        setResult([])
        setIsSearchUsed(false)
    }

    const renderResult = () => (
        result.length === 0
            ? <small>Movie not found &#128534; </small>
            : <MoviesList movies={result} />
    )

    return (
        <div >
            <Title>Search movies</Title>
            <div className='SearchForm-wrapper'>
                <SearchForm
                    onResult={handleResult}
                    onDeleteSearch={handleDeleteSearch} />
            </div>
            {isSearchUsed
                ? renderResult()
                : <small>Use the form to search a movie</small>}
        </div>
    )
}