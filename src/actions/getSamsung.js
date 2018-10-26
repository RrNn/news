import { http } from './http';
import { FETCH_SAMSUNG_NEWS_SUCCESS, NEWS_FETCH_FAILURE } from './types';

export const getSamsung = (lang) => (dispatch) => {
  http
    .get(`everything?q=samsung&language=${lang}`)
    .then((response) => {
      console.log('FETCH_SAMSUNG_NEWS_SUCCESS', response);
      dispatch({
        type: FETCH_SAMSUNG_NEWS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log('FETCH_SAMSUNG_NEWS_FAILURE', error);
      dispatch({
        type: NEWS_FETCH_FAILURE,
        payload: error,
      });
    });
};
