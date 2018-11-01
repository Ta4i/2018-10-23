import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  render() {
    const { user, text } = this.props.comment

    return (
      <div>
        <h4>{user}</h4>
        <p>{text}</p>
      </div>
    )
  }
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
}

// у меня возник вопрос, вроде разобрался, но хочу уточнить
// если я передаю объект, а в нём свойства все обязательные, но не все свойства из этого объекта я вызываю на странице - то ничего в консоль не выводится
// если же я передаю объект, описываю свойство как обязательное, но это свойство отстуствует в объекте и я его не вызываю на странице - в консоли warning
// то есть, через isRequired мы говорим, какие свойства должны получить, а не какие свойства вызвали, правильно?

export default Comment
