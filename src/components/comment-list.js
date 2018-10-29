import React, { Component } from 'react'
import Comment from './comment'
import ToggleVisible from '../decorators/toggleVisible'

class CommentList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: true
    }

    this.handleClick = handleClick.bind(this)
  }

  render() {
    return (
      <div>
        {this.props.isArticleOpen && (
          <button onClick={this.handleClick}>
            {this.state.isOpen ? 'Hide comments' : 'Show comments'}
          </button>
        )}
        <ul>{this.items}</ul>
      </div>
    )
  }

  get items() {
    const { items, isArticleOpen } = this.props
    return (
      this.state.isOpen &&
      isArticleOpen &&
      items &&
      items.map((item) => (
        <li key={item.id}>
          <Comment comment={item} />
        </li>
      ))
    )
  }
}
function handleClick() {
  this.setState({
    isOpen: !this.state.isOpen
  })
}

export default ToggleVisible(CommentList)
