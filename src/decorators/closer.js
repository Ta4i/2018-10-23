import React, { Component } from 'react'

const closer = (OriginalComponent) =>
  class DecoratedComponent extends Component {
    constructor(props) {
      super(props)

      this.state = {
        isOpen: true
      }
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
