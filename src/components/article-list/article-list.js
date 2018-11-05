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
    const filteredArticles = this.props.articleForFilter[0]
      ? this.props.articles.filter((it) =>
          this.props.articleForFilter.some((item) => item.value === it.id)
        )
      : this.props.articles

    const inRangeArticles =
      this.props.currentRange.from && this.props.currentRange.to
        ? filteredArticles.filter(
            (it) =>
              Date.parse(it.date) >= Date.parse(this.props.currentRange.from) &&
              Date.parse(it.date) <= Date.parse(this.props.currentRange.to)
          )
        : filteredArticles

    return inRangeArticles.map((item) => (
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

const mapStateToProps = (store) => ({
  articles: store.articles,
  articleForFilter: store.articleForFilter,
  currentRange: store.currentRange
})

export default connect(mapStateToProps)(accordion(ArticleList))
