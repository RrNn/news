import { http } from './http';
import { FETCH_APPLE_NEWS_SUCCESS, NEWS_FETCH_FAILURE } from './types';

export const getApple = (lang) => (dispatch) => {
  http
    .get(`everything?q=apple&language=${lang}`)
    .then((response) => {
      console.log('FETCH_APPLE_NEWS_SUCCESS', response);
      dispatch({
        type: FETCH_APPLE_NEWS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log('FETCH_APPLE_NEWS_FAILURE', error);
      dispatch({
        type: NEWS_FETCH_FAILURE,
        payload: error,
      });
    });
};
