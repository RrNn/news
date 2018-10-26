import { CHANGE_LANG } from './types';

export const changeLanguage = (lang) => (dispatch) => {
  dispatch({
    type: CHANGE_LANG,
    payload: lang,
  });
};
