// HOC === Higher Order Component

import React, { Component } from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {
    state = {
      openItemId: null,
      doOpen: false
    }
    toggleOpenItem = (openItemId, buttonText) =>
      this.setState({
        openItemId: openItemId,
        doOpen: buttonText === 'open'
      })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleOpenItem={this.toggleOpenItem}
          openItemId={this.state.openItemId}
          doOpen={this.state.doOpen}
        />
      )
    }
  }
