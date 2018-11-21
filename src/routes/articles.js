import React, { Component } from 'react'
import ArticleList from '../components/article-list'
import Article from '../components/article'
import { Route } from 'react-router-dom'

class ArticlesRoute extends Component {
  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles/:id" children={this.getArticle} />
      </div>
    )
  }
  getArticle = ({ match }) => {
    return !match ? (
      <Route
        path="/articles"
        exact
        render={() => <h2>Please select an Article</h2>}
      />
    ) : (
      <Article id={match.params.id} key={match.params.id} isOpen />
    )
  }
}

export default ArticlesRoute
