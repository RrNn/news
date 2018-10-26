import { http } from './http';
import {
  USER_IS_SEARCHING,
  USER_IS_NOLONGER_SEARCHING,
  SEARCHING_ERROR,
  USER_SEARCH_RESULTS,
} from './types';

export const isSearching = (query) => (dispatch) => {
  if (query.trim().length < 1) {
    dispatch({
      type: USER_IS_NOLONGER_SEARCHING,
    });
  } else {
    dispatch({
      type: USER_IS_SEARCHING,
    });

    http
      .get(`everything?q=${query}&pageSize=10`)
      .then((response) => {
        console.log('USER_IS_SEARCHING', response, 'THE_QUERY_IS', query);
        dispatch({
          type: USER_SEARCH_RESULTS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log('AN_ERROR_OCCURED', error);
        dispatch({
          type: SEARCHING_ERROR,
          payload: error,
        });
      });
  }
};
