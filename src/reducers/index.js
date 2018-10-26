import { combineReducers } from 'redux';
import headlineReducer from './headlineReducer';
import appleReducer from './appleReducer';
import businessReducer from './businessReducer';
import sportsReducer from './sportsReducer';
import samsungReducer from './samsungReducer';
import entertainmentReducer from './entertainmentReducer';
import searchReducer from './searchReducer';
import languageReducer from './languageReducer';

export default combineReducers({
  headlines: headlineReducer,
  apple: appleReducer,
  samsung: samsungReducer,
  business: businessReducer,
  sports: sportsReducer,
  entertainment: entertainmentReducer,
  searchResults: searchReducer,
  lang: languageReducer,
});
