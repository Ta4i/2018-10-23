import React, { PureComponent } from 'react'
import CommentList from './comment-list'

export default class Article extends PureComponent {
  constructor() {
    super()
    this.buttonTitle = ''
  }

  render() {
    const { article, isOpen } = this.props
    this.buttonTitle = isOpen ? 'close' : 'open'

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.handleClick}>{this.buttonTitle}</button>
        {this.body}
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
        <section>{article.text}</section>
        <section>{this.getComments}</section>
      </div>
    )
  }

  get getComments() {
    const { comments } = this.props.article

    return <CommentList items={comments} />
  }
}
