// HOC === Higher Order Component

import React, { Component } from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {
    state = {
      isOpen: false
    }

    toggleOpen = () => {
      this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleOpen={this.toggleOpen}
          isOpen={this.state.isOpen}
        />
      )
    }
  }
