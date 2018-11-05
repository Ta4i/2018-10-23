import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectedArticles } from '../../ac'

class SelectFilter extends Component {
  render() {
    const { selectedArticles } = this.props

    return (
      <Select
        options={this.optionsForSelect}
        onChange={this.handleSelectChange}
        value={selectedArticles}
        isMulti
      />
    )
  }

  get optionsForSelect() {
    return this.props.articles.map((item) => ({
      value: item.id,
      label: item.title
    }))
  }

  handleSelectChange = (selectedOption) => {
    this.props.dispatchSelectedArticles(selectedOption)
  }
}

const mapStateToProps = (store) => ({
  selectedArticles: store.selectedArticles
})

const mapDispatchToProps = {
  dispatchSelectedArticles: selectedArticles
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)
