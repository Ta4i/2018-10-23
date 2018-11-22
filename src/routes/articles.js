import React, { Component } from 'react'
import ArticleList from '../components/article-list'
import Article from '../components/article'
import { Route } from 'react-router-dom'
import { Consumer as LangConsumer } from '../contexts/lang'

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
        render={() => (
          <LangConsumer>
            {(value) => <h2>{value.articleChoose}</h2>}
          </LangConsumer>
        )}
      />
    ) : (
      <Article id={match.params.id} key={match.params.id} isOpen />
    )
  }
}

export default ArticlesRoute
