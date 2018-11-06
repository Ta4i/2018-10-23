import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Article from '../article'
import accordion from '../../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,
    articlesFilter: PropTypes.array,

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

const mapStateToProps = (store) => {
  const {
    articles,
    articlesFilter,
    dateRange: { from, to }
  } = store
  let selectedArticles =
    articlesFilter.length > 0
      ? articles.filter((a) => articlesFilter.includes(a.id))
      : articles
  if (from !== undefined) {
    selectedArticles = selectedArticles.filter((a) => a.date >= from)
  }
  if (to !== undefined) {
    selectedArticles = selectedArticles.filter((a) => a.date <= to)
  }

  return {
    articles: selectedArticles
  }
}

export default connect(mapStateToProps)(accordion(ArticleList))
