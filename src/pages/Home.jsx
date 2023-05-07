import React from 'react'
import MovieBanner from '../modules/MovieBanner'
import MovieList from '../modules/MovieList'
import TheaterList from '../modules/TheaterList'

const Home = () => {

  return (
    <div>
      <MovieBanner/>
      <MovieList/>
      <TheaterList/>
    </div>
  )
}

export default Home