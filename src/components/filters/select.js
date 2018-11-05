import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filerSelect } from '../../ac'

class SelectFilter extends Component {
  state = {
    selectedOption: null
  }

  render() {
    return (
      <Select
        options={this.optionsForSelect}
        onChange={this.handleSelectChange}
        value={this.state.selectedOption}
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
    this.setState({ selectedOption })
    this.props.dispatchFilterSelect(selectedOption)
    console.log('Select.js handleSelectChange', selectedOption)
  }
}

export default connect(
  null,
  { dispatchFilterSelect: filerSelect }
)(SelectFilter)
