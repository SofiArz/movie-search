import { useState } from 'react';
import { Title } from '../components/Title'
import { SearchForm } from '../components/SearchForm'
import { MoviesList } from '../components/MoviesList'
import { Orbit } from '../components/Orbit'

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
        <div>

            <div className='SearchForm-wrapper'>
                <SearchForm
                    onResult={handleResult}
                    onDeleteSearch={handleDeleteSearch} />
            </div>
            {isSearchUsed ?
                renderResult() :
                (
                    <div className='Home-wrapper'>
                        <div className='TitleContainer'>
                            <Title>Where to Watch ?</Title>
                            <p>
                                Discover the tool to find the perfect platform for streaming your &#10084; series and movies,
                                with easy access to the catalogs of 21 top streaming services!
                            </p>

                        </div>
                        <Orbit />
                    </div>
                )
            }
           

        </div>
    )
}