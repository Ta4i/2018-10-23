import React, { Component } from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {
    state = {
      isOpen: false
    }

    toggleOpenItem = () => {
      this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isOpen={this.state.isOpen}
          toggleOpenItem={this.toggleOpenItem}
        />
      )
    }
  }
