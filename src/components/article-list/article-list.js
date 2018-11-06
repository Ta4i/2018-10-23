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

const mapStateToProps = (state) => {
  const {
    selected,
    dateRange: { from, to }
  } = state.filters

  const filteredArticles = state.articles.filter((article) => {
    const published = Date.parse(article.date)

    return (
      (!selected.length ||
        selected.find((selected) => selected.value === article.id)) &&
      (!from || !to || (published > from && published < to))
    )
  })
  return {
    articles: filteredArticles
  }
}

export default connect(mapStateToProps)(accordion(ArticleList))
