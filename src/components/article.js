import React, { PureComponent } from 'react'
import CommentList from './comment-list'
import decorator from '../decorators/accordion'

class Article extends PureComponent {
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
    const { isOpen, article, toggleOpenItem, openItemId } = this.props

    if (!isOpen) {
      return null
    }

    return (
      <span>
        <section>{article.text}</section>
        <CommentList
          comments={article.comments}
          toggleOpen={toggleOpenItem}
          isOpen={openItemId === article.id}
          openItemId={article.id}
        />
      </span>
    )
  }
}

export default decorator(Article)
