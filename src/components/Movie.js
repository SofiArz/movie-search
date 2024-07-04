import { Link } from "react-router-dom";

export const Movie = ({ poster, title, year, id }) => {

    return (
        <Link to={`movie/${id}`}>
            <div className="card" style={{height:"98%"}}>
                <div className="card-image">
                    <figure className="image">
                        <img
                            src={poster}
                            alt={title}
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media" style={{height:"100%"}}>
                        <div className="media-content" style={{ paddingBottom:"10px"}}>
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6 ">{year}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

