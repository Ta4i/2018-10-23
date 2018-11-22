import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementActionCreator } from '../../ac'
import { Consumer as LangConsumer } from '../../contexts/lang'

class Counter extends Component {
  render() {
    // console.log('Counter')
    return (
      <div>
        <h1>{this.props.countProp}</h1>
        <button onClick={this.handleClick}>
          <LangConsumer>{(value) => value.countInc}</LangConsumer>
        </button>
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
