import { useState } from 'react';
import { Title } from '../components/Title'
import { SearchForm } from '../components/SearchForm'
import { MoviesList } from '../components/MoviesList'
import { Orbit } from '../components/Orbit'
import { Loading } from '../components/Loading'
import { NotFound } from './NotFound';

export const Home = () => {
    const [result, setResult] = useState([])
    const [isSearchUsed, setIsSearchUsed] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleResult = (movies) => {
        setResult(movies)
        setIsSearchUsed(true)
        handleLoading(false)
    }

    const handleDeleteSearch = () => {
        setResult([])
        setIsSearchUsed(false)
    } 

    const handleLoading = (boolean) => (setIsLoading(boolean))

    const renderResult = () => {
        if(isLoading){
            return <Loading />
        }
        return result.length === 0
            ? <NotFound title={"Oops! Movie not found!"} description={"Your search has ventured beyond the known universe!"} goHome={handleDeleteSearch} />
            : <MoviesList movies={result} />
    }

    return (
        <div>

            <div className='SearchForm-wrapper'>
                <SearchForm
                    onResult={handleResult}
                    onDeleteSearch={handleDeleteSearch}
                    onLoad={handleLoading} />
            </div>
            {isSearchUsed ?
                renderResult() :
                (
                    <div className='wrapper' style={{ marginTop: "15rem" }}>

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