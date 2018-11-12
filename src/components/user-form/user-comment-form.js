import React, { Component } from 'react'
import { addComment } from '../../ac'
import { connect } from 'react-redux'

class UserComment extends Component {
  render() {
    return (
      <form>
        <div>Добавить комментарий</div>
        <div>
          <section>
            пользователь:
            <input
              id="inputUser"
              required={true}
              minLength={2}
              maxLength={100}
            />
            <button onClick={this.handleClick}>Добавить</button>
          </section>
          <section>
            <textarea
              id="textComment"
              rows="4"
              cols="100"
              name="comment"
              placeholder="Введите комментарий..."
              required={true}
            />
          </section>
        </div>
      </form>
    )
  }

  handleClick = (evt) => {
    const nameObj = document.querySelector('#inputUser')
    const name = nameObj.value
    const nameMinValue = nameObj.minLength
    const nameMaxValue = nameObj.maxLength

    const text = document.querySelector('#textComment').value

    if (name.length >= nameMinValue && name.length <= nameMaxValue && text) {
      evt.preventDefault()

      this.props.dispatchCommentAction({
        articleId: this.props.articleId,
        comment: {
          id: '',
          user: name,
          text: text
        }
      })
    }
  }
}

export const UserCommentForm = connect(
  null,
  { dispatchCommentAction: addComment }
)(UserComment)
