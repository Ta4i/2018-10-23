import React, { PureComponent } from 'react'
import CommentList from './CommentsList'
// styles
import '../styles/app.css'

export default class Article extends PureComponent {
  state = {
    isOpen: this.props.isOpen
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
    this.props.toggleOpen(this.props.article.id)
  }

  render() {
    const { article } = this.props
    const { isOpen } = this.state
    const buttonTitle = isOpen ? 'close' : 'open'

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.handleClick}>{buttonTitle}</button>
        {this.body}
      </div>
    )
  }

  get body() {
    const { article } = this.props
    const { isOpen } = this.state

    if (!isOpen) return null

    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }
}
