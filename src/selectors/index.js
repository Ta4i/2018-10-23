import { createSelector } from 'reselect'

export const filtersSelector = (state) => state.filters
export const articlesSelector = (state) => state.articles
export const commentsSelector = (state) => state.comments
export const idSelector = (_, props) => props.id

export const createCommentSelector = () => {
  return createSelector(commentsSelector, idSelector, (comments, id) => {
    return comments[id]
  })
}

export const filteredArticleSelector = createSelector(
  filtersSelector,
  articlesSelector,
  (filters, articles) => {
    const {
      selected,
      dateRange: { from, to }
    } = filters
    console.log('selector articles-list')

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
