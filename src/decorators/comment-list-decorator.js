import React, { Component } from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {
    state = {
      showComments: false
    }

    toggleShowComments = () => {
      this.setState({
        showComments: !this.state.showComments
      })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleShowComments={this.toggleShowComments}
          showComments={this.state.showComments}
        />
      )
    }
  }
