import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../ac'
import { filtersSelector, articlesSelector } from '../../selectors'

class SelectFilter extends Component {
  render() {
    return (
      <Select
        options={this.optionsForSelect}
        onChange={this.handleSelectChange}
        value={this.props.selected}
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

  handleSelectChange = (selectedOptions) => {
    this.props.changeSelection(selectedOptions)
  }
}

export default connect(
  (state) => ({
    selected: filtersSelector(state).selected,
    articles: articlesSelector(state)
  }),
  { changeSelection }
)(SelectFilter)
