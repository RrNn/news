import {
  USER_IS_SEARCHING,
  USER_IS_NOLONGER_SEARCHING,
  USER_SEARCH_RESULTS,
  SEARCHING_ERROR,
} from '../actions/types';

let initialState = {
  isSearching: false,
  error: false,
  status: null,
  totalResults: null,
  searchResults: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_IS_SEARCHING:
      return {
        ...state,
        isSearching: true,
      };
    case USER_SEARCH_RESULTS:
      return {
        ...state,
        status: action.payload.status,
        totalResults: action.payload.totalResults,
        searchResults: action.payload.articles,
      };
    case USER_IS_NOLONGER_SEARCHING:
      return {
        ...state,
        isSearching: false,
        error: false,
        status: null,
        totalResults: null,
        searchResults: [],
      };
    case SEARCHING_ERROR:
      return {
        ...state,
        isSearching: false,
        error: true,
        status: null,
        totalResults: null,
        searchResults: [],
      };
    default:
      return state;
  }
};
