import React, { Component } from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {
    state = {
      isOpen: false
    }

    toggleVisibleItem = () => {
      this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isOpen={this.state.isOpen}
          toggleVisible={this.toggleVisibleItem}
        />
      )
    }
  }
