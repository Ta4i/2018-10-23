import React, { Component } from 'react'

const closer = (OriginalComponent) =>
  class DecoratedComponent extends Component {
    state = {
      isOpen: true
    }

    toggleClose = () => {
      this.setState(() => ({
        isOpen: !this.state.isOpen
      }))
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleHide={this.toggleClose}
          isOpen={this.state.isOpen}
        />
      )
    }
  }

export default closer
