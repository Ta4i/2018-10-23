import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementActionCreator } from '../../ac'

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.countProp}</h1>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    )
  }
  handleClick = () => {
    this.props.increment()
  }
}

const mapStateToProps = (state) => ({
  countProp: state.count
})
const mapDispatchToProps = {
  increment: incrementActionCreator
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
