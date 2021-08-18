import _ from 'lodash'

const initState = []

const movieList = (state = initState, action) => {
  switch (action.type) {
    case 'GET_MOVIES': {
      return [
        ..._.map(action.payload.data, (m) => ({
          date: m.release_date,
          image: m.backdrop_path,
          title_origin: m.original_title,
          title: m.title,
        })),
      ]
    }
    default:
      return state
  }
}

export default movieList
