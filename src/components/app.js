import React, { Component } from 'react'
import ArticleList from './article-list'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'

export default class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
        <Counter />
        <Filters articles={[]} />
        <ArticleList />
      </div>
    )
  }
}
