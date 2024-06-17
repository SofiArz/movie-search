import { redirect } from "react-router-dom";

export const NotFound = (props) => {

    const {
        title = "Page not found!",
        description = "Looks like you are lost in space!"
    } = props

    const goHome = () => (redirect("/"))

    return (
        <div className="Home-wrapper">
            <img
                src="/404.gif"
                alt="lost-spaceman"
            />
            <div className="TitleContainer">
                <h1>{title}</h1>
                <p>{description}</p>
                <button className="button is-primary" style={{marginBottom:"30px"}}>Take me home &#128640;</button>
            </div>
            <a
                className="attribution"
                href="https://pikbest.com//png-images/white-drawing-cartoon-space-day-aerospace-action-map-gif_5840589.html">
                Free png images from pikbest.com
            </a>
        </div>
    )
}
