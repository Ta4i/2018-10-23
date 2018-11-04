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
    let filterdArticles = this.filterArticlesByToDate(
      this.filterArticlesByFromDate(
        this.fitlerArticlesBySelect(this.props.articles)
      )
    )

    return filterdArticles.map((item) => (
      <li key={item.id} className={'test--article-list_item'}>
        <Article
          article={item}
          isOpen={this.props.openItemId === item.id}
          toggleOpen={this.props.toggleOpenItem}
        />
      </li>
    ))
  }

  fitlerArticlesBySelect = (articles) => {
    if (this.props.filteredArticlesBySelect.length === 0) {
      return articles
    }

    return articles.filter((a) =>
      this.props.filteredArticlesBySelect.includes(a.id)
    )
  }

  filterArticlesByFromDate = (articles) => {
    if (!this.props.filteredArticlesByDate.from) {
      return articles
    }

    let fromDate = Date.parse(this.props.filteredArticlesByDate.from)
    return articles.filter((a) => {
      let articleDate = Date.parse(a.date)
      return articleDate >= fromDate
    })
  }

  filterArticlesByToDate = (articles) => {
    if (!this.props.filteredArticlesByDate.to) {
      return articles
    }

    let toDate = Date.parse(this.props.filteredArticlesByDate.to)
    return articles.filter((a) => {
      let articleDate = Date.parse(a.date)
      return articleDate <= toDate
    })
  }
}

const mapStateToProps = (store) => ({
  articles: store.articles,
  filteredArticlesBySelect: store.filteredArticlesBySelect,
  filteredArticlesByDate: store.filteredArticlesByDate
})

export default connect(mapStateToProps)(accordion(ArticleList))
