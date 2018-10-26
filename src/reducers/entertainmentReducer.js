import {
  FETCH_ENTERTAINMENT_NEWS_SUCCESS,
  NEWS_FETCH_FAILURE,
} from '../actions/types';

let initialState = {
  success: null,
  status: null,
  totalResults: null,
  entertainment: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ENTERTAINMENT_NEWS_SUCCESS:
      return {
        ...state,
        success: true,
        status: action.payload.status,
        totalResults: action.payload.totalResults,
        entertainment: action.payload.articles,
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
