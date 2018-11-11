// HOC === Higher Order Component

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { openCloseItem, clearSubmittingComment } from '../ac'

export default (OriginalComponent) => {
  class DecoratedComponent extends Component {
    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleOpenItem={this.handleToggleOpenClose}
        />
      )
    }

    handleToggleOpenClose = (id) => {
      this.props.openCloseItem(id)
      this.props.clearSubmittingComment()
    }
  }

  const mapStateToProps = (store) => ({
    openItemId: store.openItemId
  })

  const mapDispatchToProps = {
    openCloseItem: openCloseItem,
    clearSubmittingComment: clearSubmittingComment
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(DecoratedComponent)
}
