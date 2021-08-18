import axios from 'axios'
import _ from 'lodash'

// 同步的 action
const setMovies = (data) => ({
  type: 'GET_MOVIES',
  payload: { data },
})

// 錯誤寫法
// exports.fetchMovies = async (dispatch) => {
//   const data = _.get(
//     await axios.get(
//       "https://api.themoviedb.org/3/movie/now_playing?api_key=079d25c82040bf67eedcb0b96ca55e2e&language=zh-TW"
//     ),
//     "data.results"
//   );
//   console.log("fetchMovies", data);
//   dispatch({
//     type: "GET_MOVIES",
//     payload: { data }
//   });
// };

// 非同步的 action，回傳函式
exports.fetchMovies = () => async dispatch => {
  const data = _.get(
    await axios.get(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=079d25c82040bf67eedcb0b96ca55e2e&language=zh-TW'
    ),
    'data.results'
  )
  dispatch(setMovies(data))
}
