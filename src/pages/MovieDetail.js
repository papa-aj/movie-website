import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
function MovieDetail() {
  const params = useParams()
  const [movie, setMovie] = useState([])
    const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  useEffect(() => { 
    async function fetchData() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?${ProcessingInstruction.env.API_KEY}&language=en-US`);
      const json = await response.json();
      setMovie(json);
    }
    fetchData()
  },[params.id])
  return (
    <main>
      <section className='flex  justify-around flex-wrap py-5'>
        <div className='max-w-sm'>
          <img src={image} alt="" />
        </div >
        <div className='max-w-2xl text-gray-700 space-y-4'>

          <h1 className='text-3xl font-bold'>{movie.original_title}</h1>
          <p className=' max-w-xs'>{movie.overview}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Runtime: {movie.runtime}</p>
          <p>Popularity: {movie.popularity}</p>
          <p>Vote Count: {movie.vote_count}</p>
          <p>Tagline: {movie.tagline}</p>
        </div>
</section>

    </main>
  )
}

export default MovieDetail
