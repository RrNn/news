import { http } from './http';
import { FETCH_ENTERTAINMENT_NEWS_SUCCESS, NEWS_FETCH_FAILURE } from './types';

export const getEntertainment = (lang) => (dispatch) => {
  http
    .get(`everything?q=entertainment&language=${lang}`)
    .then((response) => {
      console.log('FETCH_ENTERTAINMENT_NEWS_SUCCESS', response);
      dispatch({
        type: FETCH_ENTERTAINMENT_NEWS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log('FETCH_ENTERTAINMENT_NEWS_FAILURE', error);
      dispatch({
        type: NEWS_FETCH_FAILURE,
        payload: error,
      });
    });
};
