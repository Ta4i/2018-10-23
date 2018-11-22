import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementActionCreator } from '../../ac'
import InterContext from '../../contexts/inter'

class Counter extends Component {
  render() {
    console.log('Counter')
    return (
      <InterContext.Consumer>
        {({ increase }) => (
          <div>
            <h1>{this.props.countProp}</h1>
            <button onClick={this.handleClick}>{increase}</button>
          </div>
        )}
      </InterContext.Consumer>
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
