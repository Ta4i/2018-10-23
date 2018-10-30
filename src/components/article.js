import React, { PureComponent } from 'react'
import CommentList from './comment-list'
import PropTypes from 'prop-types'

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

    console.log('render')

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.handleClick}>{buttonTitle}</button>
        {this.body}
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
      <section>
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
    comments: PropTypes.string
  }),
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired
}
