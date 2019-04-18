export const selectArticles = state => (state.article.items ? state.article.items.articles : []);

export default {
  selectArticles,
};
