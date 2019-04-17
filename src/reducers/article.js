import { createAction, handleActions } from 'redux-actions';

import { parseError } from 'store/helpers';

const fetchArticleStart = createAction('article/FETCH_START');
const setUserToken = createAction('article/SET_TOKEN');
const getArticles = createAction('article/FETCH_ARTICLES');
const articleError = createAction('article/ERROR');
const logoutUser = createAction('article/LOGOUT');

export const actions = {
  setToken: token => dispatch => dispatch(setUserToken(token)),

  getArticles: () => async (dispatch, state, { api }) => {
    dispatch(fetchArticleStart());

    try {
      const data = await api.get('everything', {
        params: {
          q: 'test',
        },
      });
      return dispatch(getArticles(data));
    } catch (error) {
      return dispatch(
        articleError({
          error,
        })
      );
    }
  },

  logoutUser: () => dispatch => dispatch(logoutUser()),
};

export const defaultState = {
  isLoading: false,
  serverError: null,
  token: null,
};

export default handleActions(
  {
    [fetchArticleStart]: {
      next: state => {
        return {
          ...state,
          isLoading: true,
          serverError: null,
        };
      },
    },
    [setUserToken]: {
      next: (state, { payload }) => {
        return {
          ...state,
          token: payload,
        };
      },
    },
    [getArticles]: {
      next: (state, { payload: { data } }) => {
        return {
          ...state,
          isLoading: false,
          serverError: null,
          items: data,
        };
      },
    },
    [articleError]: {
      next: (_state, { payload: { error } }) => {
        return {
          isLoading: false,
          serverError: parseError(error),
        };
      },
    },
  },

  defaultState
);
