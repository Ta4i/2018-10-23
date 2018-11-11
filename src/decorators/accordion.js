// HOC === Higher Order Component

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { openCloseItem } from '../ac'

export default (OriginalComponent) => {
  class DecoratedComponent extends Component {
    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleOpenItem={this.props.handleOpenCloseItem}
        />
      )
    }
  }

  const mapStateToProps = (store) => ({
    openItemId: store.openItemId
  })

  const mapDispatchToProps = {
    handleOpenCloseItem: openCloseItem
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(DecoratedComponent)
}
