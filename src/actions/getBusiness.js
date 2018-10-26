import { http } from './http';
import { FETCH_BUSINESS_NEWS_SUCCESS, NEWS_FETCH_FAILURE } from './types';

export const getBusiness = (lang) => (dispatch) => {
  http
    .get(`everything?q=business&language=${lang}`)
    .then((response) => {
      console.log('FETCH_BUSINESS_NEWS_SUCCESS', response);
      dispatch({
        type: FETCH_BUSINESS_NEWS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log('FETCH_BUSINESS_NEWS_FAILURE', error);
      dispatch({
        type: NEWS_FETCH_FAILURE,
        payload: error,
      });
    });
};
