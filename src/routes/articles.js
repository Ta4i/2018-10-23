import React, { Component } from 'react'
import ArticleList from '../components/article-list'
import Article from '../components/article'
import { Route } from 'react-router-dom'

class ArticlesRoute extends Component {
  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles/:id" render={this.getArticle} />
      </div>
    )
  }
  getArticle = ({ match }) => {
    return <Article id={match.params.id} isOpen />
  }
}

export default ArticlesRoute
