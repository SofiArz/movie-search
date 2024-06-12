import { Movie } from './Movie'

export const MoviesList = ({ movies }) => {
    return (
        <div className='MoviesList'>
            {movies.map(movie => (
                <div
                    key={movie.imdbID}
                    className='MoviesList-item'>
                    <Movie
                        title={movie.Title}
                        poster={movie.Poster}
                        year={movie.Year}
                        id={movie.imdbID}
                    />
                </div>
            ))
            }
        </div>
    )
}