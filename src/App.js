import './styles.css'
import { fetchMovies } from './actions/movie'
import { useDispatch, useSelector } from 'react-redux'
import Card from './views/card'
import React, { useEffect } from 'react'

export default function App () {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state)
  console.log('movies', movies)

  useEffect(() => {
    dispatch(fetchMovies())
  }, [])

  return (
    <div className="App container my-2">
      <h2 className="app-h2">現正熱映中</h2>
      <div className="movie-list row mx-2">
        {
          movies.map(m => (
            <Card data={m} key={m.title} />
          ))
        }
      </div>
    </div>
  )
}
