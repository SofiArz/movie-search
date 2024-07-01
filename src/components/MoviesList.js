import { Movie } from './Movie'

export const MoviesList = ({ movies }) => {
    return (

        <div className='MoviesList grid is-col-min-12 is-column-gap-5'>
            {movies.map(movie => {
                return (
                    <div
                        key={movie.imdbID}
                        className='MoviesList-item cell'>
                        <Movie
                            title={movie.title}
                            poster={movie.imageSet.verticalPoster.w360}
                            year={movie.releaseYear}
                            id={movie.imdbId}
                        />
                    </div>)
            })
            }
        </div>

    )
}