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
    var filterdArticles = this.props.articles

    if (this.props.filteredArticlesBySelect.length > 0) {
      filterdArticles = filterdArticles.filter(
        (a) => !this.props.filteredArticlesBySelect.includes(a.id)
      )
    }

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
}

const mapStateToProps = (store) => ({
  articles: store.articles,
  filteredArticlesBySelect: store.filteredArticlesBySelect
})

export default connect(mapStateToProps)(accordion(ArticleList))
