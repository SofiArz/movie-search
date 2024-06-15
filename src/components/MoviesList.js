import { Movie } from './Movie'

export const MoviesList = ({ movies }) => {
    return (

        <div className='MoviesList grid is-col-min-12 is-column-gap-5'>
            {movies.map(movie => (
                <div
                    key={movie.imdbID}
                    className='MoviesList-item cell'>
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