import React, { Component } from 'react'
import Article from './article'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'

export class ArticleList extends Component {
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

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  openItemId: PropTypes.string,
  toggleOpenItem: PropTypes.func.isRequired
}

ArticleList.defaultProps = {
  articles: []
}

// вопрос о том, как лучше писать - выносить propTypes отдельно или писать через static метод в теле класса?

export default accordion(ArticleList)
