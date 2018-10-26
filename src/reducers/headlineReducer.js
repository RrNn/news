import { FETCH_HEADLINES_SUCCESS, NEWS_FETCH_FAILURE } from '../actions/types';

let initialState = {
  success: null,
  status: null,
  totalResults: null,
  headlines: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEADLINES_SUCCESS:
      return {
        ...state,
        success: true,
        status: action.payload.status,
        totalResults: action.payload.totalResults,
        headlines: action.payload.articles,
      };
    case NEWS_FETCH_FAILURE:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};
