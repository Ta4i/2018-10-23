import React, { PureComponent } from 'react'
import CommentList from '../comment-list'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'
import { deleteArticle, loadArticle } from '../../ac'
import { articleSelector } from '../../selectors'
import Loader from '../common/loader'
import InterContext from '../../contexts/inter'

class Article extends PureComponent {
  state = {
    error: null
  }

  componentDidCatch(error) {
    this.setState({ error })
  }

  componentDidMount() {
    this.loadArticleIfRequired()
  }

  componentDidUpdate() {
    this.loadArticleIfRequired()
  }

  loadArticleIfRequired() {
    const { articlesLoaded, loadArticle, article, id } = this.props

    if (articlesLoaded && (!article || (!article.text && !article.loading))) {
      loadArticle(id)
    }
  }

  render() {
    const { article } = this.props

    if (!article) return null

    return (
      <InterContext.Consumer>
        {({ deleteArticle }) => (
          <div>
            <h3>{article.title}</h3>
            <button
              onClick={this.handleDelete}
              className={'test--article-delete__btn'}
            >
              {deleteArticle}
            </button>
            <CSSTransition
              transitionName="article"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
              {this.body}
            </CSSTransition>
          </div>
        )}
      </InterContext.Consumer>
    )
  }

  handleDelete = () => {
    this.props.dispatchDeleteArticle(this.props.article.id)
  }

  get body() {
    const { article } = this.props

    if (article.loading) return <Loader key="loader" />

    return (
      <section className={'test--article__body'} key="body">
        {article.text}
        {this.state.error ? null : <CommentList article={article} />}
      </section>
    )
  }
}

Article.propTypes = {
  id: PropTypes.string,

  article: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    comments: PropTypes.array,
    loading: PropTypes.bool
  }),
  isOpen: PropTypes.bool.isRequired
}

export default connect(
  (state, ownProps) => ({
    article: articleSelector(state, ownProps),
    articlesLoaded: state.articles.loaded
  }),
  {
    dispatchDeleteArticle: deleteArticle,
    loadArticle
  }
)(Article)
