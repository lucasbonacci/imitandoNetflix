
import React, { useState, useEffect } from 'react';
import axios from '../axios';
import request from '../request';
import './banner.css'

const Banner = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const info = await axios.get(request.fetchNetflixOriginals)
            setMovie(info.data.results[
                Math.floor(Math.random() * info.data.results.length - 1)
            ])
            return info;
        }
        fetchData()
    }, [])


    console.log(movie)

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header
            className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
                backgroundPosition: 'center center'
            }}
        >
            <div className='banner__contents'>
                <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>

                <div className='banner_buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>

                <h1 className='banner__description'>{truncate(movie?.overview)}</h1>
            </div>
            <div className='banner--fadeBottom' />
        </header>
    )
}

export default Banner
