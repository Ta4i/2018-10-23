import React, { Component } from 'react'
import ArticleList from './article-list'
import articles from '../fixtures'
import UserForm from './user-form'

export default class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
        <ArticleList items={articles} />
      </div>
    )
  }
}
