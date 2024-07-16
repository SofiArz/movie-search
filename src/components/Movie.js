
export const Movie = ({ poster, title, year, id, streamingList }) => {

    const streamingUniqueList = [...new Map(streamingList.map(stream => [stream.service.name, stream])).values()]
    
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
                        { streamingUniqueList.length ? <p className="subtitle is-4 ">Watch in</p> : null}
                        <div className="is-flex is-flex-wrap-wrap is-justify-content-space-evenly">
                            {

                                 streamingUniqueList.map((stream, index) => {
                                    return (
                                        <img
                                            key={stream.service.id + index}
                                            src={stream.service.imageSet.darkThemeImage}
                                            alt={stream.service.name}
                                            style={{ height: "50px" }}
                                        />
                                    )
                                }
                                )

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

