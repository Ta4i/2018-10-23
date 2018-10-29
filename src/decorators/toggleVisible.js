import React, { Component } from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {
    state = {
      isOpen: null
    }
    toggleOpenItem = (isOpen) => this.setState({ isOpen })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleOpenItem={this.toggleOpenItem}
        />
      )
    }
  }
