import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectedChanged } from '../../ac'

class SelectFilter extends Component {
  render() {
    return (
      <Select
        options={this.optionsForSelect}
        onChange={this.handleSelectChange}
        value={this.selectedOption}
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
    this.props.selectedChanged(selectedOption.map((item) => item.value))
  }
}

const mapStateToProps = (store) => ({
  articles: store.articles
})

const mapDispatchToProps = {
  selectedChanged: selectedChanged
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)
