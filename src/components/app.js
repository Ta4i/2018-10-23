import React, { Component } from 'react'
import ArticleList from './article-list'
import articles from '../fixtures'

export default class App extends Component {
  render() {
    return (
      <div>
        <ArticleList items={articles} />
      </div>
    )
  }
}
