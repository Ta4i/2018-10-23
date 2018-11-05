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
    const { articles, selectedArticles } = this.props

    if (selectedArticles.length > 0) {
      const filteredArticlesList = articles.filter((article) => {
        return selectedArticles.some((selected) => {
          return selected.value === article.id
        })
      })

      return filteredArticlesList.map((item) => (
        <li key={item.id} className={'test--article-list_item'}>
          <Article
            article={item}
            isOpen={this.props.openItemId === item.id}
            toggleOpen={this.props.toggleOpenItem}
          />
        </li>
      ))
    } else {
      return articles.map((item) => (
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
}

const mapStateToProps = (store) => ({
  articles: store.articles, // from store,
  selectedArticles: store.selectedArticles
})

export default connect(mapStateToProps)(accordion(ArticleList))
