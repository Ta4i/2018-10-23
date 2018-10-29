import React, { Component } from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {
    state = {
      openItemId: null
    }

    toggleOpenItem = (openItemId) => {
      if (this.state.openItemId === openItemId) openItemId = null
      this.setState({ openItemId })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleOpenItem={this.toggleOpenItem}
          openItemId={this.state.openItemId}
        />
      )
    }
  }
