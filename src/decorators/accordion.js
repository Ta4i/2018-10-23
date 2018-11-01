// HOC === Higher Order Component

import React, { Component } from 'react'
import PropTypes from 'prop-types'

const decorated = (OriginalComponent) =>
  class DecoratedComponent extends Component {
    constructor(props) {
      super(props)

      this.state = {
        openItemId: props.initialOpenItemId || null
      }
    }
    toggleOpenItem = (openItemId) =>
      this.setState({
        openItemId: openItemId === this.state.openItemId ? null : openItemId
      })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenItem={this.toggleOpenItem}
        />
      )
    }
  }

decorated.propTypes = {
  initialOpenItemId: PropTypes.string.isRequired
}

export default decorated
