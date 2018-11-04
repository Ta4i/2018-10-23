import React, { Component } from 'react'
import Select from 'react-select'

class SelectFilter extends Component {
  render() {
    const { selectedOption } = this.props
    return (
      <Select
        options={this.optionsForSelect}
        onChange={this.handleSelectChange}
        value={selectedOption}
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
    const { selectedArticlesChanged } = this.props
    selectedArticlesChanged(selectedOption)
  }
}

export default SelectFilter
