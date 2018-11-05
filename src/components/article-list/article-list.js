import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DateUtils } from 'react-day-picker'

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

const mapStateToProps = (store) => {
  var articles = store.articles
  var dateRange = store.dateRange

  if (store.articlesSelected.length > 0) {
    articles = articles.filter((article) => {
      return store.articlesSelected.find((selected) => {
        return selected.value === article.id
      })
    })
  }

  if (dateRange && dateRange.from) {
    if (dateRange.to) {
      articles = articles.filter((article) =>
        DateUtils.isDayInRange(new Date(article.date), dateRange)
      )
    } else {
      articles = articles.filter((article) => {
        var res =
          DateUtils.isDayAfter(new Date(article.date), dateRange.from) ||
          DateUtils.isSameDay(new Date(article.date), dateRange.from)
        return res
      })
    }
  }

  return {
    articles // from store
  }
}

export default connect(mapStateToProps)(accordion(ArticleList))
