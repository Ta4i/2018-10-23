import React, { PureComponent } from 'react'

// styles
import '../styles/app.css'

export default class Article extends PureComponent {
  state = {
    isOpen: this.props.isOpen,
    isOpenComments: false
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
    this.props.toggleOpen(this.props.article.id)
  }

  handleClickCommentBtn = () =>
    this.setState({ isOpenComments: !this.state.isOpenComments })

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
    const { isOpen, isOpenComments } = this.state
    const commentBtn = isOpenComments ? 'Hide comments' : 'Show comments'

    if (!isOpen) return null

    return (
      <section>
        {article.text}
        <button className="comment__btn" onClick={this.handleClickCommentBtn}>
          {commentBtn}
        </button>
        {isOpenComments ? this.comments : null}
      </section>
    )
  }

  get comments() {
    const { article } = this.props
    const commentsArr = article.comments

    if (commentsArr) {
      return commentsArr.map((item) => (
        <div className="comment" key={item.id}>
          <span className="comment__author">
            <b>{item.user}</b> says:
          </span>
          <p className="comment__text">{item.text}</p>
        </div>
      ))
    }
  }
}
