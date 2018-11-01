import React, { Component } from 'react'
import Article from './article'
import accordion from '../decorators/accordion'

export class ArticleList extends Component {
  render() {
    return <ul>{this.items}</ul>
  }

  get items() {
    return this.props.items.map((item) => (
      <li key={item.id} className={'test-article-list-item'}>
        <Article
          article={item}
          isOpen={this.props.openItemId === item.id && this.props.doOpen}
          toggleOpen={this.props.toggleOpenItem}
        />
      </li>
    ))
  }
}

export default accordion(ArticleList)
