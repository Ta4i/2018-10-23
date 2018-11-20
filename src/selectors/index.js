import { createSelector } from 'reselect'

export const filtersSelector = (state) => state.filters
export const articlesMapSelector = (state) => state.articles.entities
export const articleListSelector = createSelector(
  articlesMapSelector,
  (articlesMap) => articlesMap.valueSeq().toJS()
)
export const articleLoadingSelector = (state) => state.articles.loading
export const articleLoadedSelector = (state) => state.articles.loaded
export const commentsSelector = (state) => state.comments.entities
export const commentsPageSelector = (state, key) =>
  state.pageWithComments.pages.get(key)
export const commentsPageTotalCount = (state) => {
  const pageSize = 5
  const {
    pageWithComments: { totalCount }
  } = state
  const pagesCount =
    Math.floor(totalCount / pageSize) + (totalCount % pageSize != 0 ? 1 : 0)
  return pagesCount
}

export const commentsPageIsLoadingSelector = (state) => ({
  loading: state.pageWithComments.loading,
  loaded: state.pageWithComments.loaded
})

export const commentsPage = (state, pageNumber) => {
  let result = state.pageWithComments.pages.get(parseInt(pageNumber))
  if (!result) {
    result = {
      number: parseInt(pageNumber),
      comments: [],
      isLoaded: false
    }
  }
  return result
}
export const idSelector = (_, props) => props.id

export const createCommentSelector = () => {
  return createSelector(
    commentsSelector,
    idSelector,
    (comments, id) => {
      return comments.get(id)
    }
  )
}

export const filteredArticleSelector = createSelector(
  filtersSelector,
  articleListSelector,
  (filters, articles) => {
    const {
      selected,
      dateRange: { from, to }
    } = filters

    return articles.filter((article) => {
      const published = Date.parse(article.date)

      return (
        (!selected.length ||
          selected.find((selected) => selected.value === article.id)) &&
        (!from || !to || (published > from && published < to))
      )
    })
  }
)

export const articleSelector = createSelector(
  articlesMapSelector,
  idSelector,
  (articles, id) => articles.get(id)
)
