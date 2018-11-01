import React, { Component } from 'react'
import Comment from './comment'
import ToggleVisible from '../decorators/toggleVisible'

class CommentList extends Component {
  render() {
    const { isOpen } = this.props

    return (
      <div>
        <button onClick={this.handleClick}>
          {isOpen ? 'Hide comments' : 'Show comments'}
        </button>
        {isOpen && <ul>{this.items}</ul>}
      </div>
    )
  }

  handleClick = () => {
    this.props.toggleVisible()
  }

  get items() {
    const { items } = this.props

    return (
      this.props.isOpen &&
      items &&
      items.map((item) => (
        <li key={item.id}>
          <Comment comment={item} />
        </li>
      ))
    )
  }
}

export default ToggleVisible(CommentList)
