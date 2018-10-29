import React, { Component } from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {
    state = {
      isOpen: false
    }
    toggleOpen = () =>
      this.setState({ ...this.state, isOpen: !this.state.isOpen })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isOpen={this.state.isOpen}
          toggleOpen={this.toggleOpen}
        />
      )
    }
  }
