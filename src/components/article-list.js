import React, { Component } from 'react'
import Article from './article'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        comments: PropTypes.arrayOf(
          PropTypes.shape({
            user: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
          }).isRequired
        )
      })
    ),
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired
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

export default accordion(ArticleList)
