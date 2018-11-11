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
    return Object.keys(this.props.articles).map((key) => {
      const article = this.props.articles[key]
      return {
        value: article.id,
        label: article.title
      }
    })
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
