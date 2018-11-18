import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadAllComments } from '../../ac'

class AllCommentsList extends Component {
  componentDidMount() {
    this.props.loadAllComments()
  }

  render() {
    console.log(this.props.allComments)
    return (
      <div>
        <button onClick={this.props.loadAllComments}>update comments</button>
        <ul>{this.items}</ul>
      </div>
    )
  }

  get items() {
    // return <div>
    //     All comments
    // </div>

    return this.props.allComments.map((it) => (
      <li key={it.id}>
        <p>{it.text}</p>
        <b>{it.user}</b>
      </li>
    ))
  }
}

const MapStateToProps = (state) => {
  return {
    allComments: state.allComments
  }
}

export default connect(
  MapStateToProps,
  { loadAllComments }
)(AllCommentsList)
