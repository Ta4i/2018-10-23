import React, { Component } from 'react'
import ArticleComment from './comment'
import decorComment from '../../decorators/comment-decor'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'

export class CommentList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    isCommentOpen: PropTypes.bool.isRequired,
    toggleState: PropTypes.func.isRequired
  }

  static defaultProps = {
    items: [
      {
        id: '123456asds',
        user: 'Для данной статьи еще нет комментариев',
        text: ''
      }
    ]
  }

  render() {
    if (!this.props.items) {
      return null
    }

    const buttonText = this.props.isCommentOpen
      ? 'Hide comments'
      : 'Show comments'

    return (
      <div>
        <button className="test-comment_button" onClick={this.onButtonClick}>
          {buttonText}
        </button>

        <CSSTransition
          transitionName="artcomment"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.items}
        </CSSTransition>
      </div>
    )
  }

  get items() {
    const { isCommentOpen } = this.props

    if (!isCommentOpen) {
      return null
    }

    return (
      <div>
        <h4>Comments:</h4>
        <ul>{this.item}</ul>
      </div>
    )
  }

  get item() {
    return this.props.items.map((item) => (
      <li key={item.id}>{<ArticleComment item={item} />}</li>
    ))
  }

  onButtonClick = () => {
    this.props.toggleState()
  }
}

export default decorComment(CommentList)
