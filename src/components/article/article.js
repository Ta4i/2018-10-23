import React, { PureComponent } from 'react'
import CommentList from '../comments'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'

export default class Article extends PureComponent {
  constructor() {
    super()
    this.buttonTitle = ''
  }

  state = {
    error: null
  }

  componentDidCatch(error) {
    this.setState({ error: error })
  }

  render() {
    const { article, isOpen } = this.props
    this.buttonTitle = isOpen ? 'close' : 'open'

    return (
      <div>
        <h3>{article.title}</h3>
        <button className="test-article_btn" onClick={this.handleClick}>
          {this.buttonTitle}
        </button>
        <CSSTransition
          transitionName="article"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.body}
        </CSSTransition>

        {/* {this.body} */}
      </div>
    )
  }

  handleClick = () => {
    this.props.toggleOpen(this.props.article.id, this.buttonTitle)
  }

  get body() {
    const { isOpen, article } = this.props

    if (!isOpen) return null

    return (
      <div>
        <section className={'test-article_body'}>{article.text}</section>
        {this.state.error ? null : <section>{this.getComments}</section>}
      </div>
    )
  }

  get getComments() {
    const { comments } = this.props.article

    return <CommentList items={comments} />
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.date,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    comments: PropTypes.array
  }),
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
}
