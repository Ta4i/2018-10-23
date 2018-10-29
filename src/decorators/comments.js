import React, { Component } from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {
    state = {
      isOpen: false
    }

    handleClick = () => this.setState({ isOpen: !this.state.isOpen })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          handleClick={this.handleClick}
          isOpen={this.state.isOpen}
        />
      )
    }
  }
