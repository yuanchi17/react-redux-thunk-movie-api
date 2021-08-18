import { createStore, applyMiddleware } from 'redux'
import movieList from './movie.js'
import thunk from 'redux-thunk'

const store = createStore(movieList, applyMiddleware(thunk))

export default store
