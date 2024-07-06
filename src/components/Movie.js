import { Link } from "react-router-dom";

export const Movie = ({ poster, title, year, id }) => {

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img
                        src={poster}
                        alt={title}
                        style={{ height: "440px" }}
                    />
                </figure>
            </div>
            <div className="card-content hide">
                <div className="media">
                    <div className="media-content" style={{ paddingBottom: "10px" }}>
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6 ">{year}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

