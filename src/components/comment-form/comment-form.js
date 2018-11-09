import React, { Component } from 'react'
import toggleOpenItem from '../../decorators/toggleOpen'

class CommentForm extends Component {
  render() {
    const { toggleOpenItem } = this.props
    return (
      <div>
        <button onClick={toggleOpenItem} className="test--comment-form__btn">
          {'Add comment'}
        </button>
        {this.getBody()}
      </div>
    )
  }
  getBody() {
    const { isOpen } = this.props
    if (!isOpen) return null
    return (
      <div className="test--comment-form__body">
        <form>
          Username:
          <input value="Enter your name" />
          Comment text
          <input value={'Enter your comment'} />
          <button className="test--submit-form__btn">{'Submit'}</button>
        </form>
      </div>
    )
  }
}

export default toggleOpenItem(CommentForm)
