import { http } from './http';
import { FETCH_HEADLINES_SUCCESS, NEWS_FETCH_FAILURE } from './types';

export const getHeadlines = (lang) => (dispatch) => {
  http
    .get(`everything?q=top-headlines&language=${lang}`)
    .then((response) => {
      console.log('FETCH_HEADLINES_SUCCESS', response);
      dispatch({
        type: FETCH_HEADLINES_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log('FETCH_HEADLINES_FAILURE', error);
      dispatch({
        type: NEWS_FETCH_FAILURE,
        payload: error,
      });
    });
};
