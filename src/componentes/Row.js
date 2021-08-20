import React, { useState, useEffect } from 'react'
import axios from '../axios'
import './row.css'

const base_url = 'https://image.tmdb.org/t/p/original'

const Row = ({ title, fetchUrl, isLargeRow }) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(e => {
                    return (
                        <img
                            key={e.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${base_url}${isLargeRow ? e.poster_path : e.backdrop_path}`}
                            alt={e.name} />
                    )
                })}
            </div>

        </div>
    )
}

export default Row