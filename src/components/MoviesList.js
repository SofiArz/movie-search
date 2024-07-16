import { Movie } from './Movie'

export const MoviesList = ({ movies }) => {
    return (

        <div className='MoviesList grid is-col-min-12 is-column-gap-5'>
            {movies.map((movie, index) => {
                return (
                    <div
                        key={movie.imdbID}
                        className='MoviesList-item cell'
                        style={{ zIndex: movies.length - index }}>
                        <Movie
                            title={movie.title}
                            poster={movie.imageSet.verticalPoster.w360}
                            year={movie.releaseYear}
                            id={movie.imdbId}
                            streamingList={movie.streamingOptions?.us || []}
                        />
                    </div>)
            })
            }
        </div>

    )
}