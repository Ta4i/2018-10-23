import React, { Component } from 'react'
import Article from './article'

class ArticleList extends Component {
  state = {
    openArticleId: null
  }

  toggleOpenArticle = (openArticleId) => this.setState({ openArticleId })

  render() {
    return <ul>{this.items}</ul>
  }

  get items() {
    return this.props.items.map((item) => (
      <li key={item.id}>
        <Article
          article={item}
          isOpen={this.state.openArticleId === item.id}
          toggleOpen={this.toggleOpenArticle}
        />
      </li>
    ))
  }
}

export default ArticleList
