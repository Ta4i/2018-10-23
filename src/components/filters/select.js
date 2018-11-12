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

const mapStateToProps = (state) => {
  const articles = articlesSelector(state).map((id) => {
    return state.articleObject[id]
  })

  return {
    selected: filtersSelector(state).selected,
    articles: articles
  }
}

export default connect(
  mapStateToProps,
  { changeSelection }
)(SelectFilter)
