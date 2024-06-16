import { useEffect, useState } from "react"
import { defer, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    const movie = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${params.id}`)
        .then(res => res.json())

    return defer({ movie });
}

const API_KEY = '4d326555' //TO DO

export const Details = () => {
    const { movie } = useLoaderData()
    console.log(movie)

    return (
        <p>Details page</p>
    )

}