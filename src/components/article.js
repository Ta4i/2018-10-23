import React, { PureComponent } from 'react'
import CommentList from './comment-list'

export default class Article extends PureComponent {
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
        <CommentList comments={article.comments} />
      </section>
    )
  }
}
