import React, { PureComponent } from 'react'
import CommentList from './comment-list'

export default class Article extends PureComponent {
  render() {
    const { article, isOpen } = this.props
    const buttonTitle = isOpen ? 'close' : 'open'

    return (
      <div>
        {console.log('зашла в return article')}
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
    console.log('isOpen внутри body: ', isOpen)

    if (!isOpen) return null

    return (
      <div>
        <section>{article.text}</section>
        <CommentList items={article.comments} />
      </div>
    )
  }
}
