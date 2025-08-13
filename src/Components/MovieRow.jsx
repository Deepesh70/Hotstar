import React, { useEffect, useCallback } from 'react'
import { useState } from 'react'
const MovieRow = ({ fetchUrl }) => {
    const[movielist, setMovielist]= useState([]);
    const fetchmovies = useCallback(()=>{            // Function to fetch movies from the API
        fetch(fetchUrl)
           .then(res => res.json())
           .then((json)=> setMovielist(json.results))


    }, [fetchUrl]);
    useEffect(()=>{             // useEffect to call fetchmovies when the component mounts or fetchUrl changes
        fetchmovies()
    }, [fetchUrl, fetchmovies]);
  return (
    <div className='flex gap-1 bg-black ml-28 py-20 overflow-x-scroll whitespace-nowrap'>
        {movielist.map((movie)=>(
            <img
            key={movie.id || movie.poster_path}
            style={{width: '200px', height: '300px'}}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
        ))}
    </div>
  )
}

export default MovieRow