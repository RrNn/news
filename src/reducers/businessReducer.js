import {
  FETCH_BUSINESS_NEWS_SUCCESS,
  NEWS_FETCH_FAILURE,
} from '../actions/types';

let initialState = {
  success: null,
  status: null,
  totalResults: null,
  business: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUSINESS_NEWS_SUCCESS:
      return {
        ...state,
        success: true,
        status: action.payload.status,
        totalResults: action.payload.totalResults,
        business: action.payload.articles,
      };
    case NEWS_FETCH_FAILURE:
      return {
        ...state,
        success: false,
      };
      break;
    default:
      return state;
  }
};
