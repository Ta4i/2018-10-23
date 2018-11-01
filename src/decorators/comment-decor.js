import React, { Component } from 'react'

export default (OriginComp) =>
  class DecorComp extends Component {
    state = {
      isOpen: false
    }

    toggleState = () => {
      this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
      return (
        <OriginComp
          {...this.props}
          toggleState={this.toggleState}
          isCommentOpen={this.state.isOpen}
        />
      )
    }
  }
