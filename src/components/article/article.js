import React, { PureComponent } from 'react'
import CommentList from '../comment-list'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'

export default class Article extends PureComponent {
  state = {
    error: null
  }
  componentDidCatch(error) {
    this.setState({ error })
  }
  render() {
    const { article, isOpen } = this.props
    const buttonTitle = isOpen ? 'close' : 'open'

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.handleClick} className={'test--article__btn'}>
          {buttonTitle}
        </button>
        <CSSTransition
          transitionName="article"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={1500}
        >
          {this.body}
        </CSSTransition>
      </div>
    )
  }

  handleClick = () => {
    this.props.toggleOpen(this.props.article.id)
  }

  get body() {
    const { isOpen, article } = this.props

    if (!isOpen) return null

    return (
      <section className={'test--article__body'}>
        {article.text}
        {this.state.error ? null : <CommentList comments={article.comments} />}
      </section>
    )
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    comments: PropTypes.array
  }),
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired
}
