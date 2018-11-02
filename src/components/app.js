import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './article-list'
import articles from '../fixtures'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'

export default class App extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  render() {
    return (
      <div>
        <UserForm />
        <Counter />
        <Filters articles={articles} />
        <ArticleList articles={articles} />
      </div>
    )
  }
}
