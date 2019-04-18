import { createAction, handleActions } from 'redux-actions';

import { parseError } from 'store/helpers';

const fetchArticleStart = createAction('article/FETCH_START');
const getArticles = createAction('article/FETCH_ARTICLES');
const articleError = createAction('article/ERROR');

export const actions = {
  getArticles: params => async (dispatch, state, { api }) => {
    dispatch(fetchArticleStart());
    try {
      const data = await api.get('everything', {
        params,
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
