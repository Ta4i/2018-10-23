import React, { PureComponent } from 'react'

const COMMENTS_TITLE = 'Comments'

export default class Article extends PureComponent {
  render() {
    const { article, isOpen } = this.props
    const buttonTitle = isOpen ? 'close' : 'open'
    const commentsButton = isOpen ? (
      <button onClick={this.handleOpenComments}>{COMMENTS_TITLE}</button>
    ) : null

    console.log('render')
    return (
      <div>
        <h3>{article.title}</h3>
        {this.body}
        <button onClick={this.handleOpenArticle}>{buttonTitle}</button>
        {commentsButton}
        {this.child}
      </div>
    )
  }

  handleOpenArticle = () => {
    this.props.toggleOpen(this.props.article.id)
  }

  handleOpenComments = () => {
    this.props.toggleOpenComments()
  }

  get body() {
    const { isOpen, article } = this.props

    if (!isOpen) return null
    return <section>{article.text}</section>
  }

  get child() {
    const { isOpen } = this.props
    if (!isOpen) return null
    return this.props.children
  }
}
