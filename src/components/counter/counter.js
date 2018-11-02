import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    )
  }
  handleClick = () => {
    this.props.dispatch({
      type: 'INCREMENT'
    })
  }
}

const mapStateToProps = (state) => ({
  count: state.count
})

export default connect(mapStateToProps)(Counter)
