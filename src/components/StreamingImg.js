export const StreamingImg = ({ source, name, style, }) => {
    return (
        <img
            src={source}
            alt={name}
            style={style}
            className="streaming-logo-orbit" />
    )
}
