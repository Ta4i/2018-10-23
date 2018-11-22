import React, { Component } from 'react'
import ArticleList from '../components/article-list'
import Article from '../components/article'
import { Route } from 'react-router-dom'
import InterContext from '../contexts/inter'

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
      <InterContext.Consumer>
        {({ selectArticle }) => (
          <Route
            path="/articles"
            exact
            render={() => <h2>{selectArticle}</h2>}
          />
        )}
      </InterContext.Consumer>
    ) : (
      <Article id={match.params.id} key={match.params.id} isOpen />
    )
  }
}

export default ArticlesRoute
