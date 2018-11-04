import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Article from '../article'
import accordion from '../../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchData && this.props.fetchData()
  }
  render() {
    return <ul>{this.items}</ul>
  }

  get items() {
    return this.props.articles.map((item) => (
      <li key={item.id} className={'test--article-list_item'}>
        <Article
          article={item}
          isOpen={this.props.openItemId === item.id}
          toggleOpen={this.props.toggleOpenItem}
        />
      </li>
    ))
  }
}

const filterByDate = (date, from, to) => {
  var dt = Date.parse(date)
  if (!from || !to) {
    return true
  }
  return from <= dt && dt < to
}

const mapStateToProps = (store) => {
  const {
    articles,
    articlesFilter,
    dateFilter: { from, to }
  } = store
  let toCopy = to === undefined ? undefined : new Date(to)
  if (toCopy) {
    toCopy.setDate(toCopy.getDate() + 1)
  }
  const filteredArticles = articles.filter((a) =>
    articlesFilter.some(
      (sa) => sa.value === a.id && filterByDate(a.date, from, toCopy)
    )
  )
  return {
    articles: filteredArticles
  }
}

export default connect(mapStateToProps)(accordion(ArticleList))
