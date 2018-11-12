import { createSelector } from 'reselect'

export const filtersSelector = (state) => state.filters
export const articlesSelector = (state) => state.articles
export const articlesObjectSelector = (state) => state.articleObject
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
  articlesObjectSelector,
  (filters, articlesIds, articleObject) => {
    const {
      selected,
      dateRange: { from, to }
    } = filters
    console.log('selector articles-list')

    return articlesIds
      .filter((articleId) => {
        const published = Date.parse(articleObject[articleId].date)

        return (
          (!selected.length ||
            selected.find((selected) => selected.value === articleId)) &&
          (!from || !to || (published > from && published < to))
        )
      })
      .map((id) => {
        return articleObject[id]
      })
  }
)
